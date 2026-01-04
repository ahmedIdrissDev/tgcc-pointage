import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const today = new Date().toISOString().split("T")[0];
const time = new Date().toLocaleTimeString("en-GB");

export const getEmaployeesData = query({
  args: {
    number_id: v.number(),
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
            q.eq(q.field("work_date"), today),
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
            q.eq(q.field("work_date"), today),
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
        await ctx.db.patch(validateAttendance._id, { check_out: time , status:false });
      } else {
        await ctx.db.insert("Attendance", {
          check_in: time,
          check_out: "",
          employee_id: args.employee_id,
          project_id: args.project_id,
          work_date: today,
          status:true
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
        .filter((q) =>
          q.and(
            q.eq(q.field("employee_id"), employee._id),
          )
        )
        .order("desc")
        .collect();
        const Attendance = await Promise.all(AttendanceData.map( async(data)=>{
            const project_id =  await ctx.db.get(data.project_id)
            return {
              ...data ,
              project_id:project_id?.name

            }
        }))
      return {
        employee,
        project_id,
        Attendance,
      };
    } catch (error) {
      console.log(error);
    }
  },
});
