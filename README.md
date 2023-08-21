# What I learn

## Concepts:
Use next-auth for authentication. 
Learn the basic structure of next-auth

## Step
### Inside /src/api director
/auth/[...nextauth]/route.ts - Declare provider and provide authorize function.
/login/route.ts - Server side api, When user request this route, it communicate with DB to check for that user & pass, return result if correct.
/signup/route.ts - Similar to /login/route.ts

### Inside /lib
prisma.ts - Some tweak of prisma, prevent prisma initialize unnecessary new Client

### Use React Context API
/components/Providers.tsx - Use SessionProvider from 'next-auth/react' to wrap {children}.
/components/SigninButton.tsx - Use useSession hook to check if session not null and user exists (Providers.tsx above)

### Project Pages with Next-auth middleware
Pretty simple, just add /src/middleware.ts. Automatically protect route (but not request, must use JWT technique)

### JWT token inside Header
Step 1: Login route should create a JWT Access Token
Create /lib/jwt.js sign function
/api/login/route.ts sign JWT and send back to user
Step 2: Save Access token inside Next-Auth Session
/api/auth/[...nextauth]/route.ts create callbacks object after providers, to provide token in session provided.
Step 3: Require the client to have Access Token inside Header of request
/api/user/[id]/route.ts - Check accessToken is exists or accessToken is correct. If not return error

### Add roles based
https://www.youtube.com/watch?v=xJ6efexXJ7I