using RestAPI.Data;
using RestAPI.Models;

namespace RestAPI.Interfaces
{
    public class BotService : IBotService
    {
        private readonly DataContext _context;

        public BotService(DataContext context)
        {
            _context = context;
        }

        public Bot Get(long id)
        {
            return _context.Bot.Find(id);
        }

        public bool Create(Bot bot)
        {
            _context.Bot.Add(bot);
            return _context.SaveChanges() > 0;
        }     


        public bool Process()
        {
            return true;
        }
    }
}
