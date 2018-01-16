Uppdate the databasemodel through the Package Manager Console:

Scaffold-DbContext -Connection "Server=(local);Database=CoreStartup;Integrated Security=True;Trusted_Connection=True;" -Provider Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -context CoreRepositoryContext -Project CoreRepository -force -Verbose

N.B! -force doesn't delete old models of tables, these models have to be deleted manually if you've removed them from your database