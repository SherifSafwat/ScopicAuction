using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestAPI.Interfaces;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost]
        [Route("Login")]
        public ActionResult<User> Login([FromBody] User user)
        {
            User urerobj = _userService.Login(user.UserName);
            if (urerobj != null)
                return Ok(urerobj);

            return Unauthorized(); 
        }

        [HttpPost]
        [Route("Amount")]
        public ActionResult<bool> Amount([FromBody] User user)
        {
            return Ok(_userService.SetAmount(user.UserId, user.BidAmount));
        }
    }
}
