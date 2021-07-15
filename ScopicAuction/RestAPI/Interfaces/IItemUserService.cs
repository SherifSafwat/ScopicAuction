using RestAPI.Models;

namespace RestAPI.Interfaces
{
    public interface IItemUserService
    {
        public ItemUser GetById(int id);
        public bool Update(ItemUser item);
    }
}
