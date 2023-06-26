using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieRentalAPI.Data;
using MovieRentalAPI.Models;

namespace MovieRentalAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly MovieFinalDbContext _dbContext;
        private readonly object?[]? CustomerId;

        public CustomerController(MovieFinalDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //Get method api/movies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomer()
        {
            if (_dbContext.Customers == null)
            {
                return NotFound();
            }
            return await _dbContext.Customers.ToListAsync();
        }

        //get api/movie/5
        [HttpGet("CustomerId")]
        public async Task<ActionResult<Customer>> GetCustomer(int CustomerId)
        {
            if (_dbContext.Customers == null)
            {
                return NotFound();
            }
            var customer = await _dbContext.Customers.FindAsync(CustomerId);

            if (customer == null)
            {
                return NotFound();
            }
            return customer;

        }
        //post
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            _dbContext.Customers.Add(customer);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCustomer), new { MovieId = customer.CustomerId }, customer);
        }

        //put
        [HttpPut("CustomerId")]

        public async Task<ActionResult<Customer>> PutCustomer(int CustomerId, Customer customer)
        {
            if (CustomerId != customer.CustomerId)
            {
                return BadRequest();
            }
            _dbContext.Entry(customer).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(CustomerId))
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

        private bool CustomerExists(long CustomerId)
        {
            return (_dbContext.Customers?.Any(e => e.CustomerId == CustomerId)).GetValueOrDefault();
        }

        //Delete
        [HttpDelete("CustomerId")]

        public async Task<IActionResult> DeleteCustomer(int CustomerId)
        {
            if (_dbContext.Customers == null)
            {
                return NotFound();
            }
            var customer = await _dbContext.Customers.FindAsync(CustomerId);
            if (customer == null)
            {
                return NotFound();
            }
            _dbContext.Customers.Remove(customer);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
