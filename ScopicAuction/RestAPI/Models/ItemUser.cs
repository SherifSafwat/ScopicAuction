namespace RestAPI.Models
{
    public class ItemUser
    {
        public User user { get; set; }
        public Item item { get; set; }
        public Bid bid { get; set; }
    }
}
