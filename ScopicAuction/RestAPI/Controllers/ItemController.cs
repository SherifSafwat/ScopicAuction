using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestAPI.Interfaces;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : ControllerBase
    {

        private readonly ILogger<ItemController> _logger;
        private readonly IItemService _itemService;
        private readonly ITimerService _timerService;
        

        public ItemController(ILogger<ItemController> logger, IItemService itemService, ITimerService timerService)
        {
            _logger = logger;
            _itemService = itemService;
            _timerService = timerService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Item>> Get()
        {
            _timerService.UpdateTime();
            return Ok(_itemService.GetAll());
        }

        [HttpGet]
        [Route("GetById")]
        public ActionResult<ItemPage> GetById([FromQuery] int id)
        {
            _timerService.UpdateTime();
            return Ok(_itemService.GetById(id));
        }

        [HttpGet]
        [Route("GetPage")]
        public ActionResult<ItemPage> GetPage([FromQuery] int pageNum)
        {
            _timerService.UpdateTime();
            return Ok(_itemService.GetPage(pageNum));
        }


        [HttpGet]
        [Route("Search")]
        public ActionResult<ItemPage> Search(string str)
        {
            _timerService.UpdateTime();
            return Ok(_itemService.Search(str));
        }

        [HttpPut]
        [Route("Update")]
        public ActionResult<bool> Put([FromBody] Item item)
        {
            return Ok(_itemService.Update(item));
        }

    }
}
