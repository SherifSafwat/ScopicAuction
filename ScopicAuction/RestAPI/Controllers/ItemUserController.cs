using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestAPI.Interfaces;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemUserController : ControllerBase
    {
        /*private readonly ITimerService _timerService;
        private readonly IItemUserService _itemUserService;

        private readonly ILogger<UserController> _logger;

        public ItemUserController(ILogger<UserController> logger, IItemUserService itemUserService, ITimerService timerService)
        {
            _logger = logger;
            _timerService = timerService;
            _itemUserService = itemUserService;
        }

        [HttpGet]
        [Route("GetById")]
        public ActionResult<ItemPage> GetById([FromQuery] int id)
        {
            _timerService.UpdateTime();
            return Ok(_itemUserService.GetById(id));
        }

        [HttpPut("{id:int}")]
        public ActionResult<bool> Put(ItemUser item)
        {
            return Ok(_itemUserService.Update(item));
        }*/

    }
}
