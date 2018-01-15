Uppdatera modellen genom Package Manager Console:

Scaffold-DbContext -Connection "Server=(local);Database=CoreStartup;Integrated Security=True;Trusted_Connection=True;" -Provider Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -context CoreRepositoryContext -Project CoreRepository -force -Verbose

OBS! -force tar ej bort gamla tabeller utan dessa måste tas bort manuellt om du nu tagit bort dem i databasen