import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const handleDemande= mutation({
    args:{
    user_Id: v.id("user"),
    project_id: v.id("Project"),
    code : v.string(),
    datedelivraison : v.string(),
    commentaire: v.string(),
    quantite:v.string() ,

    } ,
    handler:async ( ctx , args)=>{
        try {
         await ctx.db.insert("Demande", args)
        } catch (error) {
            console.log(error)
        }
    }
})


export const QueryDemande = query({
    args:{
            project_id: v.id("Project"),

    } ,
        handler:async ( ctx , args)=>{
        try {
          const demande = await ctx.db.query("Demande").filter(
            q=> q.eq(q.field('project_id' ) ,args.project_id)
         ).collect()
         return Promise.all(
            demande.map( async (data )=>{
           const  user = await ctx.db.query("user").filter(q=> q.eq(q.field('_id' ) ,data.user_Id) ).first()
           const  Project = await ctx.db.query("user").filter(q=> q.eq(q.field('_id' ) ,data.user_Id)).first()
        const Gestionnaire=user?.username
       

         return {
           data ,
           Gestionnaire ,
           Project
         }
            })
         )
        } catch (error) {
            console.log(error)
        }
    }

})