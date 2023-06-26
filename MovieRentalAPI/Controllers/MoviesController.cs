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
    public class MoviesController : ControllerBase
    {
        private readonly MovieFinalDbContext _dbContext;
        private readonly object?[]? MovieId;

        public MoviesController(MovieFinalDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //Get method api/movies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
        {
            if (_dbContext.Movies == null)
            {
                return NotFound();
            }
            return await _dbContext.Movies.ToListAsync();
        }

        //get api/movie/5
        [HttpGet("MovieId")]
        public async Task<ActionResult<Movie>> GetMovie(int MovieId)
        {
            if (_dbContext.Movies == null)
            {
                return NotFound();
            }
            var movie = await _dbContext.Movies.FindAsync(MovieId);

            if (movie == null)
            {
                return NotFound();
            }
            return movie;

        }
        //post
        [HttpPost]
        public async Task<ActionResult<Movie>> PostMovie(Movie movie)
        {
            _dbContext.Movies.Add(movie);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMovie), new { MovieId = movie.MovieId }, movie);
        }

        //put
        [HttpPut("MovieId")]

        public async Task<ActionResult<Movie>> PutMovie(int MovieId,Movie movie)
        {
            if (MovieId != movie.MovieId)
            {
                return BadRequest();
            }
            _dbContext.Entry(movie).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(MovieId))
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

        private bool MovieExists(long MovieId) {
            return (_dbContext.Movies?.Any(e => e.MovieId == MovieId)).GetValueOrDefault();
        }

        //Delete
        [HttpDelete("MovieId")]

        public async Task<IActionResult> DeleteMovie(int MovieId)
        {
            if (_dbContext.Movies == null)
            {
                return NotFound();
            }
            var movie = await _dbContext.Movies.FindAsync(MovieId);
            if (movie == null)
            {
                return NotFound();
            }
            _dbContext.Movies.Remove(movie);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
