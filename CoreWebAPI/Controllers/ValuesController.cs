using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public ValuesController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        // GET api/values
        [HttpGet]
        [Route("")]
        public IActionResult Get()
        {
            return Ok(new { data = "sdgsdg" });
        }

        [HttpGet]
        [Route("secure")]
        [Authorize]
        public IActionResult GetSecure()
        {
            return Ok(new { data = "secure" });
        }
    }
}
