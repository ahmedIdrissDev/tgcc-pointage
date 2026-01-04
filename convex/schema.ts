import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    username:v.string(),
    password:v.string() ,
    first_name: v.string(),
    last_name: v.string(),
    role: v.union(v.literal("Admin"), v.literal("HR"), v.literal("user")),
  }),

  Project: defineTable({
    name: v.string(),
    users:v.array(v.id('user'))
  }),

  Employee: defineTable({
    number_id:v.number() ,
    first_name: v.string(),
    last_name: v.string(),
    project_id: v.id("Project"),
    type:v.union(
      v.literal("Quinzainier") ,
        v.literal("Mensuel") ,
    ) ,
    status:v.union(
        v.literal("Actif") ,
        v.literal("inatif") ,
    ) ,

  }).index("project_id", ["project_id"]),

  Attendance: defineTable({
    work_date: v.string(),
    employee_id: v.id("Employee"),
    project_id: v.id("Project"),
    check_in: v.string(),
    check_out: v.string(),
    status:v.union(
        v.literal(false) ,
        v.literal(true) ,
    ) 
  })
    .index("project_id", ["project_id"])
    .index("emplyee_id", ["employee_id"]),
});
