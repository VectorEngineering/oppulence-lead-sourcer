import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportAccessCreateManyInputSchema } from '../inputTypeSchemas/ReportAccessCreateManyInputSchema'

export const ReportAccessCreateManyArgsSchema: z.ZodType<Prisma.ReportAccessCreateManyArgs> = z.object({
  data: z.union([ ReportAccessCreateManyInputSchema,ReportAccessCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReportAccessCreateManyArgsSchema;
