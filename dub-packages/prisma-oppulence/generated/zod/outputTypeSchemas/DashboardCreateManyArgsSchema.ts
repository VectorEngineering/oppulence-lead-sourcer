import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DashboardCreateManyInputSchema } from '../inputTypeSchemas/DashboardCreateManyInputSchema'

export const DashboardCreateManyArgsSchema: z.ZodType<Prisma.DashboardCreateManyArgs> = z.object({
  data: z.union([ DashboardCreateManyInputSchema,DashboardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DashboardCreateManyArgsSchema;
