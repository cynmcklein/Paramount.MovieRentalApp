using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieRentalAPI.Data;
using MovieRentalAPI.Models;

using System.Collections;
using System.Net;
using System.Net.Http;

using Newtonsoft.Json.Linq;

namespace MovieRentalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RentalDetails : ControllerBase
    {

        private readonly MovieFinalDbContext _dbContext;
        private readonly object?[]? MovieId;

        public RentalDetails(MovieFinalDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        [ProducesResponseType(typeof(string), 200)]
        public async Task<IActionResult> Get()
        {
            var mergedData = await _dbContext.Orders
                .Join(
                    _dbContext.Customers,
                    order => order.CustomerId,
                    customer => customer.CustomerId,
                    (order, customer) => new
                    {
                        OrderId = order.OrderId,
                        CustomerName = customer.CustomerName,
                        Phone = customer.Phone,
                        DateRented = order.DateRented,
                        DateReturned = order.DateReturned,
                    }
                )
                .ToListAsync();

            if (mergedData.Count == 0)
            {
                return NotFound();
            }

            return Ok(mergedData);
        }

    }
}
