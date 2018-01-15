using System;
using System.Collections.Generic;

namespace CoreRepository.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string AspNetUserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public AspNetUsers AspNetUser { get; set; }
    }
}
