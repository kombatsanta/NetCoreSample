using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreDataContract;
using CoreService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ProfileController : Controller
    {
        private readonly IUserService _userService;

        public ProfileController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("")]
        public IActionResult Get()
        {
            var user = _userService.GetUser(User.Identity.Name);

            return Ok(user);
        }
    }
}