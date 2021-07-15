using RestAPI.Models;

namespace RestAPI.Interfaces
{
    public interface IUserService
    {
        public User Login(string user);
        public bool SetAmount(int userid, int money);
    }
}
