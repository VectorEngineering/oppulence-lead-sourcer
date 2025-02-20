import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportColumnCreateManyInputSchema } from '../inputTypeSchemas/ReportColumnCreateManyInputSchema'

export const ReportColumnCreateManyArgsSchema: z.ZodType<Prisma.ReportColumnCreateManyArgs> = z.object({
  data: z.union([ ReportColumnCreateManyInputSchema,ReportColumnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReportColumnCreateManyArgsSchema;
