import NextAuth from "next-auth/next";
import 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      accessToken: string;
    }
  }
  interface User {
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
  }
}