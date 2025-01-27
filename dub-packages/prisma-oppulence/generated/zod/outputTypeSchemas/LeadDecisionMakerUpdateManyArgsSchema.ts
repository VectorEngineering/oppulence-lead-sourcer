import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadDecisionMakerUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadDecisionMakerUpdateManyMutationInputSchema'
import { LeadDecisionMakerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadDecisionMakerUncheckedUpdateManyInputSchema'
import { LeadDecisionMakerWhereInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereInputSchema'

export const LeadDecisionMakerUpdateManyArgsSchema: z.ZodType<Prisma.LeadDecisionMakerUpdateManyArgs> = z.object({
  data: z.union([ LeadDecisionMakerUpdateManyMutationInputSchema,LeadDecisionMakerUncheckedUpdateManyInputSchema ]),
  where: LeadDecisionMakerWhereInputSchema.optional(),
}).strict() ;

export default LeadDecisionMakerUpdateManyArgsSchema;
