using System;

namespace CoreDataContract
{
    public class CurrentUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        /// <summary>
        /// Only for register and login
        /// </summary>
        public string Password { get; set; }

    }
}
