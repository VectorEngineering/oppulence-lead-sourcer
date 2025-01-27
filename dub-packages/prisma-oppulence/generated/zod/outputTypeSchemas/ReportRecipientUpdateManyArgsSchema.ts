import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportRecipientUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportRecipientUpdateManyMutationInputSchema'
import { ReportRecipientUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportRecipientUncheckedUpdateManyInputSchema'
import { ReportRecipientWhereInputSchema } from '../inputTypeSchemas/ReportRecipientWhereInputSchema'

export const ReportRecipientUpdateManyArgsSchema: z.ZodType<Prisma.ReportRecipientUpdateManyArgs> = z.object({
  data: z.union([ ReportRecipientUpdateManyMutationInputSchema,ReportRecipientUncheckedUpdateManyInputSchema ]),
  where: ReportRecipientWhereInputSchema.optional(),
}).strict() ;

export default ReportRecipientUpdateManyArgsSchema;
