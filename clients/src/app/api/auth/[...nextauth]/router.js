
import NextAuth from "next-auth"
import GoogleProvider from  'next-auth/providers/google'




export const authOptions = NextAuth({
   // Configure one or more authentication providers
   providers: [
     GoogleProvider({
       clientId: process.env.GOOGLE_ID,
       clientSecret: process.env.GOOGLE_SECRET,
     }),
     
   ],
 })

export {authOptions as  GET , authOptions as  POST}