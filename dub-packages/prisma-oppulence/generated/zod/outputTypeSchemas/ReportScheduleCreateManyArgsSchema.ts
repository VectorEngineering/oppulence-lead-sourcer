import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScheduleCreateManyInputSchema } from '../inputTypeSchemas/ReportScheduleCreateManyInputSchema'

export const ReportScheduleCreateManyArgsSchema: z.ZodType<Prisma.ReportScheduleCreateManyArgs> = z.object({
  data: z.union([ ReportScheduleCreateManyInputSchema,ReportScheduleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReportScheduleCreateManyArgsSchema;
