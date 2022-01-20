using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using API.Entities;
using System;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            this._context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret() 
        {
            return "secret text";
        }

        [Authorize]
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound() 
        {
            var thing = _context.Users.Find(-1);
            if(thing == null) return NotFound();

            return Ok(thing);
        }

        [Authorize]
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError() 
        {         
                var thing = _context.Users.Find(-1);
                var thingToReturn = thing.ToString();

                return thingToReturn;      
        }

        [Authorize]
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest() 
        {
            return BadRequest("This was not a good request");
        }
    }
}