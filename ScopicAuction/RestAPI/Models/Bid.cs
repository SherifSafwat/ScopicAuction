namespace RestAPI.Models
{
    public class Bid
    {
        public int BidId { get; set; }
        public int ItemId { get; set; }
        public int UserId { get; set; }
        public float Amount { get; set; }
        public int LastBidUserId { get; set; }
        public bool Auto { get; set; }

    }
}
