import 'server-only';

import { Pool, neonConfig } from '@neondatabase/serverless';

import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { env } from '@playbookmedia/env';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: env.DATABASE_URL });
const adapter = new PrismaNeon(pool);

export const database = new PrismaClient({ adapter });

export * from '@prisma/client';
