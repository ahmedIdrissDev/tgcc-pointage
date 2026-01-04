import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
export default withAuth(
  function middleware(req) {
     const isAuth = !!req.nextauth.token
     const pathname = req.nextUrl.pathname
     const isRootPage = pathname === "/";
     if(isAuth && isRootPage) {
       return NextResponse.redirect(new URL("/dashboard" , req.url))
     }
      if(!isAuth && !isRootPage) {
       return NextResponse.redirect(new URL("/" , req.url))
     }
     return NextResponse.next();
  },

  {
    callbacks: {
      authorized: ({ token }) => !!token, 
       },
  },
)

export const config = { matcher: ["/dashboard(.*)" ,'/taches(.*)' ,'/effectifs(.*)', '/meeting(.*)'] }