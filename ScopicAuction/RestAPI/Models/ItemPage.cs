using System.Collections.Generic;

namespace RestAPI.Models
{
    public class ItemPage
    {
        //public const int PageSize = 10;
        public int PageNum { get; set; }
        public int TotalPages { get; set; }
        public List<Item> Items { get; set; }
    }
}
