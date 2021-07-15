namespace RestAPI.Models
{
    public class Bot
    {
        public int BotId { get; set; }
        public int ItemId { get; set; }
        public int UserId { get; set; }
        public bool ClosedBotItem { get; set; }
        public bool ClosedItem { get; set; }
    }
}
