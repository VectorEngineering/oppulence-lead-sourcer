import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportSortingWhereInputSchema } from '../inputTypeSchemas/ReportSortingWhereInputSchema'

export const ReportSortingDeleteManyArgsSchema: z.ZodType<Prisma.ReportSortingDeleteManyArgs> = z.object({
  where: ReportSortingWhereInputSchema.optional(),
}).strict() ;

export default ReportSortingDeleteManyArgsSchema;
