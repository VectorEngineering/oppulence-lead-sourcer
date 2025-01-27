import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportFilterUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportFilterUpdateManyMutationInputSchema'
import { ReportFilterUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportFilterUncheckedUpdateManyInputSchema'
import { ReportFilterWhereInputSchema } from '../inputTypeSchemas/ReportFilterWhereInputSchema'

export const ReportFilterUpdateManyArgsSchema: z.ZodType<Prisma.ReportFilterUpdateManyArgs> = z.object({
  data: z.union([ ReportFilterUpdateManyMutationInputSchema,ReportFilterUncheckedUpdateManyInputSchema ]),
  where: ReportFilterWhereInputSchema.optional(),
}).strict() ;

export default ReportFilterUpdateManyArgsSchema;
