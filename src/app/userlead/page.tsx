"use client"
import { useSession } from "next-auth/react"

export default function Page() {
  const {data: session, status} = useSession()
  
  // console.log('session in admin page: ', session?.user)
  if (session?.user.role === "user_lead" || session?.user.role === "admin") {
    return <p>You are an user leader, welcome!</p>
  }

  return <p>Please contact Vuong!</p>
}