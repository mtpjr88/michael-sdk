I really tried to stay within the 2 hour guidelines the recruiter made very clear. If I were alotted more time I would provide more documentation and types with a rc file to store the token and retreive it automatically.

I opted for an object oriented approach with simple desclaritive wrappers that essentially allow the consuming develop to just instantiate the sdk and call the methods. This was a clean and quick solution that allowed my public sdk class to inherit the api without poluting it.

File structure:
I opted for a simple `@internal` directory that are more or less protected, in my case the api service layer.

The `main` directory contains the meat of the package very light weight.
