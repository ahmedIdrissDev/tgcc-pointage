import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const login = query({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const user = await ctx.db
        .query("user")
        .filter((q) =>
          q.and(
            q.eq(q.field("username"), args.username),
            q.eq(q.field("password"), args.password)
          )
        )
        .first();
      if(!user) return null
      if (user) {
        const { first_name, last_name, role, _id ,username } = user;
        return {
          username,
          _id,
          first_name,
          last_name,
          role,
        };
      }
    } catch (error) {}
  },
});
