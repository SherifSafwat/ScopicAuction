using RestAPI.Models;

namespace RestAPI.Interfaces
{
    public interface IBotService
    {
        public Bot Get(long id);
        public bool Create(Bot bot);
        public bool Process();
    }
}
