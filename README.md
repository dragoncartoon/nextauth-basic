## What I learn

# Concepts:
Use next-auth for authentication. 
Learn the basic structure of next-auth

# Step
Inside /src/api director
/auth/[...nextauth]/route.ts - Responsible for declare provider
/login/route.ts - Server side api, When user request this route, it check DB for that user & pass, return result if correct.
/signup/route.ts - Similar to /login/route.ts

Inside /lib
prisma.ts - Some tweak of prisma, prevent prisma initialize unnecessary new Client
 