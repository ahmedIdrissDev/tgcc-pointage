import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const getEmaployeesData = query({
  args: {
    number_id: v.number(),
    date: v.optional( v.string())  ,

  },
  handler: async (ctx, args) => {
    try {
      const employee = await ctx.db
        .query("Employee")
        .filter((q) => q.eq(q.field("number_id"), args.number_id))
        .first();
      if (!employee) return { error: "not found" };
      const project_id = await ctx.db.get(employee.project_id);
      const Attendance = await ctx.db
        .query("Attendance")
        .filter((q) =>
          q.and(
            q.eq(q.field("work_date"), args.date),
            q.eq(q.field("employee_id"), employee._id)
          )
        )
        .first();

      return {
        employee,
        project_id,
        status: Attendance?.status || false,
      };
    } catch (error) {
      console.log(error);
    }
  },
});

export const getProject = query({
  args: {
    userId: v.id("user"),
  },
  handler: async (ctx, args) => {
    try {
      const project = await ctx.db.query("Project").collect();
      if (!project) return [{ error: "not" }];
      const getProject = project.filter(({ users }) =>
        users.includes(args.userId)
      );
      return getProject;
    } catch (error) {}
  },
});

export const handleAttendance = mutation({
  args: {
    employee_id: v.id("Employee"),
    project_id: v.id("Project"),
    date: v.string() ,
    time:v.string() 
  },
  handler: async (ctx, args) => {
    try {
      if (!args.employee_id || !args.project_id)
        return {
          error: "error",
        };
      const validateAttendance = await ctx.db
        .query("Attendance")
        .filter((q) =>
          q.and(
            q.eq(q.field("work_date"), args.date),
            q.eq(q.field("employee_id"), args.employee_id),
            q.eq(q.field("project_id"), args.project_id)
          )
        )
        .first();
      if (validateAttendance?.check_in && validateAttendance.check_out)
        return {
          error: "Sortie déjà enregistrée pour cet employé",
        };
      if (validateAttendance && !validateAttendance.check_out) {
        await ctx.db.patch(validateAttendance._id, {
          check_out: args.time,
          status: false,
        });
      } else {
        await ctx.db.insert("Attendance", {
          check_in: args.time,
          check_out: "",
          employee_id: args.employee_id,
          project_id: args.project_id,
          work_date:  args.date,
          status: true,
        });
      }
    } catch (error) {}
  },
});

export const getEmaployee = query({
  args: {
    id: v.id("Employee"),
  },
  handler: async (ctx, args) => {
    try {
      const employee = await ctx.db.get(args.id);

      if (!employee) return { error: "not found" };
      const project_id = await ctx.db.get(employee.project_id);
      const AttendanceData = await ctx.db
        .query("Attendance")
        .filter((q) => q.and(q.eq(q.field("employee_id"), employee._id)))
        .order("desc")
        .collect();
         const documents = await ctx.db
        .query("doc")
        .filter((q) => q.and(q.eq(q.field("employee_id"), employee._id)))
        .order("desc")
        .collect();
      const Attendance = await Promise.all(
        AttendanceData.map(async (data) => {
          const project_id = await ctx.db.get(data.project_id);
          return {
            ...data,
            project_id: project_id?.name,
          };
        })
      );
      return {
        employee,
        project_id,
        Attendance,
        documents
      };
    } catch (error) {
      console.log(error);
    }
  },
});

export const fetchEmployees = query({
  args: {
    id: v.id("Project"),
    date: v.string()
  },
  handler: async (ctx, args) => {
    const employee = await ctx.db
      .query("Employee")
      .filter((q) => q.eq(q.field("project_id"), args.id))
      .collect();
    return Promise.all(
      employee.map(async (data) => {
        const validateAttendance = await ctx.db
          .query("Attendance")
          .filter((q) =>
            q.and(
              q.eq(q.field("work_date"), args.date),
              q.eq(q.field("employee_id"), data._id)
            )
          )
          .first();

        return {
          ...data,
          present: !!validateAttendance,
        };
      })
    );
  },
});


export const handledocuments= mutation({
  args:{
     user_Id: v.id("user"),
    type:v.union(
       v.literal('CIN') ,
       v.literal('RIB') ,
       v.literal('CNSS') ,
       v.literal('CV') ,
    ) ,
    date:v.string() ,
    employee_id: v.id("Employee"),
    doc_url: v.string(),
        Gestionnaire:v.string() ,

  } ,
  handler:async (ctx  , args)=>{
    try {
      await ctx.db.insert('doc' , args)
    } catch (error) {
      console.log(error)
    }
  }
})

/// handel employee 

export const AddEmployee = mutation({
   args:{
    first_name: v.string(),
    last_name: v.string(),
    project_id: v.id("Project"),
    type: v.union(v.literal("Quinzainier"), v.literal("Mensuel")),
    cin: v.string(),
    date_naissance: v.string(),
    nationalite: v.string(),
    adresse: v.string(),
    ville: v.string(),
    pays: v.string(),
    telephone: v.string(),
    tgcc_role: v.string(),
    tgcc_statu: v.string(),

   } ,
    handler: async (ctx , args)=>{
      try {
          const employee = await ctx.db.query('Employee').collect();
          const number_id =  2000000 + employee.length + 1 ;
          const data = {
            number_id   ,
            status: 'Actif' as "Actif"|"Inactif",
            ...args ,
          }
           return  await ctx.db.insert("Employee", data)
      } catch (error) {
          console.log(error)
      }
    }
})