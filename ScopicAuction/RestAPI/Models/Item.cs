
namespace RestAPI.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public float  Price { get; set; }
        public int LastUserId { get; set; }
        public float CloseDate { get; set; }
        public bool ClosedItem { get; set; }
    }
}
