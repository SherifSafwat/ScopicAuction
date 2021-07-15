using RestAPI.Models;
using System.Collections.Generic;

namespace RestAPI.Interfaces
{
    public interface IItemService
    {
        public IEnumerable<Item> GetAll();
        public ItemPage GetPage(int pagenum);
        public Item GetById(int id);
        public ItemPage Search(string str);
        public bool Update(Item item);        
    }
}
