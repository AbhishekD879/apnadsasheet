import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./auth-utils/schema.js",
    out: "./drizzle",
    dbCredentials:{
        url: "postgresql://neondb_owner:do6YMlswF2zy@ep-cold-field-a1057to4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    }
});
