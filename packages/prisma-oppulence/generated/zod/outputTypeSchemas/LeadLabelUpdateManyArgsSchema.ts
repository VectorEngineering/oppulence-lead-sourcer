import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadLabelUpdateManyMutationInputSchema'
import { LeadLabelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadLabelUncheckedUpdateManyInputSchema'
import { LeadLabelWhereInputSchema } from '../inputTypeSchemas/LeadLabelWhereInputSchema'

export const LeadLabelUpdateManyArgsSchema: z.ZodType<Prisma.LeadLabelUpdateManyArgs> = z.object({
  data: z.union([ LeadLabelUpdateManyMutationInputSchema,LeadLabelUncheckedUpdateManyInputSchema ]),
  where: LeadLabelWhereInputSchema.optional(),
}).strict() ;

export default LeadLabelUpdateManyArgsSchema;
