using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CoreRepository.Models;
using CoreService;
using CoreWebAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IUserService _userService;

        public TokenController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IUserService userService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CoreDataContract.CurrentUser user)
        {
            var result = await _signInManager.PasswordSignInAsync(user.UserName, user.Password, false, lockoutOnFailure: false);
            if (result.Succeeded)
                return Ok(new
                {
                    token = GenerateToken(user.UserName)
                });
            return BadRequest();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody]CoreDataContract.CurrentUser user)
        {
            try
            {
                var appUser = new ApplicationUser { UserName = user.UserName, Email = user.Email };
                var result = await _userManager.CreateAsync(appUser, user.Password);

                if (result.Succeeded)
                {
                    _userService.CreateUser(user, appUser.Id);
                    
                }
            }catch(Exception e)
            {
                return BadRequest(e);
            }
            
            return Ok(new { Data = "success" });
        }

        private string GenerateToken(string username)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString()),
            };

            var token = new JwtSecurityToken(
                new JwtHeader(new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes("the secret that needs to be at least 16 characeters long for HmacSha256")),
                                             SecurityAlgorithms.HmacSha256)),
                new JwtPayload(claims));

            var retVal = new JwtSecurityTokenHandler().WriteToken(token);

            return retVal;
        }
    }
}