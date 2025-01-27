import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportColumnWhereInputSchema } from '../inputTypeSchemas/ReportColumnWhereInputSchema'

export const ReportColumnDeleteManyArgsSchema: z.ZodType<Prisma.ReportColumnDeleteManyArgs> = z.object({
  where: ReportColumnWhereInputSchema.optional(),
}).strict() ;

export default ReportColumnDeleteManyArgsSchema;
