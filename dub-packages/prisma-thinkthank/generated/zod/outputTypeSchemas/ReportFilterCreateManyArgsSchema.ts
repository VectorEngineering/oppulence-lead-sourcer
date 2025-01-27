import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportFilterCreateManyInputSchema } from '../inputTypeSchemas/ReportFilterCreateManyInputSchema'

export const ReportFilterCreateManyArgsSchema: z.ZodType<Prisma.ReportFilterCreateManyArgs> = z.object({
  data: z.union([ ReportFilterCreateManyInputSchema,ReportFilterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReportFilterCreateManyArgsSchema;
