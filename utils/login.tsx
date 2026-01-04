import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
interface LoginTypes {
    username:string , 
    password: string ,
}
export async function Login(){
      try {
        const users =  await fetchQuery(api.user.login ,{})
      } catch (error) {
        
      }
}