using CoreDataContract;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreService
{
    public interface IUserService
    {
        CurrentUser GetUser(string userName);
        void CreateUser(CurrentUser user, string aspNetUserId);
    }
}
