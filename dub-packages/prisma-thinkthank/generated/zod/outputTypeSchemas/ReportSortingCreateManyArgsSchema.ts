import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportSortingCreateManyInputSchema } from '../inputTypeSchemas/ReportSortingCreateManyInputSchema'

export const ReportSortingCreateManyArgsSchema: z.ZodType<Prisma.ReportSortingCreateManyArgs> = z.object({
  data: z.union([ ReportSortingCreateManyInputSchema,ReportSortingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReportSortingCreateManyArgsSchema;
