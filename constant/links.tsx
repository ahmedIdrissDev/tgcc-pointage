import { Box, Hexagon, Home, Settings, User, Users } from "lucide-react"

interface links{
    label:string ,
    path:string ,
    icon:React.ReactNode
}


export const links:links[]=[
    {
        icon:<Home/> ,
        label:'Tableau de bord' ,
        path:'/dashboard'
    } ,
    {
        icon:<Users/> ,
        label:'Salaries' ,
        path:'/employee'
    } ,
     {
        icon:<Hexagon/> ,
        label:'Engins' ,
        path:'/engins'
    } ,
     ,
     {
        icon:<Box/> ,
        label:'Stock' ,
        path:'/engins'
    } ,
     {
        icon:<Settings/> ,
        label:'Paramètres' ,
        path:'/settings'
    } ,
   
]