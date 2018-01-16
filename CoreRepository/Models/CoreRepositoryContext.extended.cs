using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreRepository.Models
{
    public partial class CoreRepositoryContext : DbContext
    {
        public CoreRepositoryContext(DbContextOptions<CoreRepositoryContext> options)
            : base(options)
        { }
    }
}
