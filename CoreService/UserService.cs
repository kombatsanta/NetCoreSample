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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dbContext"></param>
        public UserService(CoreRepositoryContext dbContext)
        {
            _dbContext = dbContext;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public CurrentUser GetUser(string userName)
        {
            var user = _dbContext.User.Where(e => e.AspNetUser.UserName == userName).FirstOrDefault();

            var ret = new CurrentUser()
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Id = user.Id,
                Email = user.Email
            };

            return ret;
        }

        public void CreateUser(CurrentUser user, string aspNetUserId)
        {
            using (var scope = _dbContext.Database.BeginTransaction())
            {
                try
                {
                    User dbUser = new User()
                    {
                        AspNetUserId = aspNetUserId,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        UserName = user.UserName,
                        Email = user.Email
                    };

                    _dbContext.User.Add(dbUser);
                    _dbContext.SaveChanges();
                    scope.Commit();
                }
                catch (Exception)
                {
                    scope.Rollback();
                }
            }

        }
    }
}
