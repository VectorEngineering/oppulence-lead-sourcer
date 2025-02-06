import { loadEnvConfig } from "@next/env";
import { exec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execAsync = promisify(exec);

async function dumpDatabase() {
  try {
    // Load environment variables
    const dev = process.env.NODE_ENV !== "production";
    const projectDir = path.resolve(__dirname, "..");
    loadEnvConfig(projectDir, dev);

    if (!process.env.POSTGRES_URL) {
      throw new Error("POSTGRES_URL environment variable is not set");
    }

    // Create docker pg_dump command
    const command =
      "docker-compose exec -T db pg_dump -U postgres --clean --if-exists > db/seed/seed.sql";

    console.log("Starting database dump...");
    await execAsync(command);
    console.log("Successfully dumped database to db/seed/seed.sql");

    process.exit(0);
  } catch (error) {
    console.error("Error dumping database:", error);
    process.exit(1);
  }
}

dumpDatabase();
