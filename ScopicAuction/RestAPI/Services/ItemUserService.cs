using RestAPI.Data;
using RestAPI.Models;
using System.Linq;


namespace RestAPI.Interfaces
{
    public class ItemUserService : IItemUserService
    {
        private readonly DataContext _context;
        private readonly IBotService _botService;

        public ItemUserService(DataContext context, IBotService botService)
        {
            _context = context;
            _botService = botService;
        }

        public ItemUser GetById(int id)
        {
            return null; // _context.Item.Where(x => x.ItemId == id).FirstOrDefault();
        }

        public bool Update(ItemUser itemUser)
        {
            _botService.Process();

            //_context.Entry(item).State = EntityState.Modified;
            return _context.SaveChanges() > 0;
        }

    }
}
