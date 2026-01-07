import { Id } from "@/convex/_generated/dataModel";
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {

  interface Session {
    user: {
 first_name:string 
 , last_name:string, 
 role :string ,
   username:string

  _id:Id<"user">
    } & DefaultSession["user"]
  }

  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
first_name:string 
 , last_name:string, 
 role :string ,
  _id:string ,
  username:string
  }
}