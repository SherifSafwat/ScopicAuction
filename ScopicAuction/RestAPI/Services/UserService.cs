using Microsoft.EntityFrameworkCore;
using RestAPI.Data;
using RestAPI.Models;
using System.Linq;


namespace RestAPI.Interfaces
{
    public class UserService : IUserService
    {
        private static readonly string[] Users = new[]
        {
            "User1", "User2", "User3"
        };

        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        public User Login(string user)
        {
            return _context.User.Where(x => x.UserName.ToLower() == user.ToLower()).FirstOrDefault();
        }

        public bool SetAmount(int userid, int money)
        {
            //_context.User.Where(x => x.UserId == userid).FirstOrDefault().BidAmount = money;
            var user = _context.User.Where(x => x.UserId == userid).FirstOrDefault();
            user.BidAmount = money;

            _context.Entry(user).State = EntityState.Modified;

            return _context.SaveChanges() > 0;            
        }
    }
}
