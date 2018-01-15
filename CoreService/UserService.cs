using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CoreDataContract;
using CoreRepository.Models;

namespace CoreService
{
    public class UserService : IUserService
    {
        private readonly CoreRepositoryContext _dbContext;

        public UserService(CoreRepositoryContext dbContext)
        {
            _dbContext = dbContext;
        }

        public CurrentUser GetUser(string userName)
        {
            var user = _dbContext.User.Where(e => e.AspNetUser.UserName == userName).FirstOrDefault();

            var ret = new CurrentUser()
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Id = user.Id
            };

            return ret;
        }
    }
}
