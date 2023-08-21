import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // console.log('token in withAuth: ',token)
      // console.log(req.nextUrl.pathname)
      // `/admin` requires admin role
      // if (req.nextUrl.pathname === "/admin") {
      //   return token?.role === "admin"
      // }
      // `/UserPost` only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/admin", "/UserPost"] }