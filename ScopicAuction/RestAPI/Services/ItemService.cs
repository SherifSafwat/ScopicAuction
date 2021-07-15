using Microsoft.EntityFrameworkCore;
using RestAPI.Data;
using RestAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RestAPI.Interfaces
{
    public class ItemService : IItemService
    {
        private readonly DataContext _context;             

        public ItemService(DataContext context, IBotService botService)
        {
            _context = context;            
        }

        public IEnumerable<Item> GetAll()
        {
            return _context.Item.ToList();
        }

        public Item GetById(int id)
        {
            return _context.Item.Where(x => x.ItemId == id).FirstOrDefault();
        }

        public ItemPage Search(string str)
        {
            ItemPage resault = new ItemPage
            {
                TotalPages = (int)Math.Ceiling((double)_context.Item.Count() / 10),
                PageNum = 1,
                Items = _context.Item.Where(x => x.ItemName.ToLower().Contains(str.ToLower())).OrderBy(p => "ItemId").Take(10).ToList()
            };

            return resault;
        }

        public ItemPage GetPage(int pagenum)
        {
            int PageSize = 10;

            ItemPage resault = new ItemPage
            {
                TotalPages = (int)Math.Ceiling((double)_context.Item.Count() / PageSize),
                PageNum = pagenum,
                Items = _context.Item.OrderBy(p => "ItemId").Skip((int)((pagenum - 1) * PageSize)).Take(PageSize).ToList()
            };

            return resault;

        }

        public bool Update(Item item)
        {
            //_botService.Process();

            var newitem = _context.Item.Where(x => x.ItemId == item.ItemId).FirstOrDefault();
            newitem.LastUserId = item.LastUserId;
            newitem.Price = item.Price;

            _context.Entry(newitem).State = EntityState.Modified;
            return _context.SaveChanges() > 0;
        }
    }
}
