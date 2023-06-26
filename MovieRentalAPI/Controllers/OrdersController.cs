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
    public class OrdersController : ControllerBase
    {
        private readonly MovieFinalDbContext _dbContext;
        private readonly object?[]? OrderId;

        public OrdersController(MovieFinalDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //Get method api/movies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            if (_dbContext.Orders == null)
            {
                return NotFound();
            }
            return await _dbContext.Orders.ToListAsync();
        }

        //get api/movie/5
        [HttpGet("OrderId")]
        public async Task<ActionResult<Order>> GetOrder(int OrderId)
        {
            if (_dbContext.Orders == null)
            {
                return NotFound();
            }
            var order = await _dbContext.Orders.FindAsync(OrderId);

            if (order == null)
            {
                return NotFound();
            }
            return order;

        }
        //post
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _dbContext.Orders.Add(order);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { OrderId = order.OrderId }, order);
        }

        //put
        [HttpPut("OrderId")]

        public async Task<ActionResult<Order>> PutOrder(int OrderId, Order order)
        {
            if (OrderId != order.OrderId)
            {
                return BadRequest();
            }
            _dbContext.Entry(order).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(OrderId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        private bool OrderExists(long OrderId)
        {
            return (_dbContext.Orders?.Any(e => e.OrderId == OrderId)).GetValueOrDefault();
        }

        //Delete
        [HttpDelete("MovieId")]

        public async Task<IActionResult> DeleteOrder(int OrderId)
        {
            if (_dbContext.Movies == null)
            {
                return NotFound();
            }
            var order = await _dbContext.Movies.FindAsync(OrderId);
            if (order == null)
            {
                return NotFound();
            }
            _dbContext.Movies.Remove(order);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
