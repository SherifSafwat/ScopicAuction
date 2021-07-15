using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestAPI.Interfaces;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BotController : ControllerBase
    {
        private readonly IBotService _botService;
        private readonly ILogger<UserController> _logger;

        public BotController(ILogger<UserController> logger, IBotService botService)
        {
            _logger = logger;
            _botService = botService;
        }

        [HttpGet("{id}")]
        [Route("Get/{id}")]
        public IActionResult GetBot(long id)
        {
            var product = _botService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPost]
        [Route("Create")]
        public ActionResult<Bot> Create([FromBody] Bot bot)
        {

            if (_botService.Create(bot))
                return CreatedAtAction("GetBot", new { id = bot.BotId }, bot);

            return NotFound(); 
        }

    }
}
