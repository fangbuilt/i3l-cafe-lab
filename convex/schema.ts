import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  menu: defineTable({
    consignee: v.string(),
    item: v.string(),
    price: v.number(),
    tag: v.string(),
    active: v.boolean(),
  })
})
