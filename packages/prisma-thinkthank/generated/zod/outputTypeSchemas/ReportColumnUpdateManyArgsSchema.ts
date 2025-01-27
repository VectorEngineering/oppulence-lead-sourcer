import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportColumnUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportColumnUpdateManyMutationInputSchema'
import { ReportColumnUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportColumnUncheckedUpdateManyInputSchema'
import { ReportColumnWhereInputSchema } from '../inputTypeSchemas/ReportColumnWhereInputSchema'

export const ReportColumnUpdateManyArgsSchema: z.ZodType<Prisma.ReportColumnUpdateManyArgs> = z.object({
  data: z.union([ ReportColumnUpdateManyMutationInputSchema,ReportColumnUncheckedUpdateManyInputSchema ]),
  where: ReportColumnWhereInputSchema.optional(),
}).strict() ;

export default ReportColumnUpdateManyArgsSchema;
