import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadFeedbackUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadFeedbackUpdateManyMutationInputSchema'
import { LeadFeedbackUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadFeedbackUncheckedUpdateManyInputSchema'
import { LeadFeedbackWhereInputSchema } from '../inputTypeSchemas/LeadFeedbackWhereInputSchema'

export const LeadFeedbackUpdateManyArgsSchema: z.ZodType<Prisma.LeadFeedbackUpdateManyArgs> = z.object({
  data: z.union([ LeadFeedbackUpdateManyMutationInputSchema,LeadFeedbackUncheckedUpdateManyInputSchema ]),
  where: LeadFeedbackWhereInputSchema.optional(),
}).strict() ;

export default LeadFeedbackUpdateManyArgsSchema;
