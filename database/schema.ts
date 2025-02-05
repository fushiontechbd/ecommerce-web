
import { integer, text, boolean, pgTable, uuid,timestamp, varchar} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name",{length:255}).notNull(),
  email: text('email').notNull().unique(),
  password:text('password').notNull(),
  createdAt:timestamp('created_at',{withTimezone:true}).defaultNow()
});






