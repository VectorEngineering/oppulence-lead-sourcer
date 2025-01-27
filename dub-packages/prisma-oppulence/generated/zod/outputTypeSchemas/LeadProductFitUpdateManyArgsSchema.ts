import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadProductFitUpdateManyMutationInputSchema'
import { LeadProductFitUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadProductFitUncheckedUpdateManyInputSchema'
import { LeadProductFitWhereInputSchema } from '../inputTypeSchemas/LeadProductFitWhereInputSchema'

export const LeadProductFitUpdateManyArgsSchema: z.ZodType<Prisma.LeadProductFitUpdateManyArgs> = z.object({
  data: z.union([ LeadProductFitUpdateManyMutationInputSchema,LeadProductFitUncheckedUpdateManyInputSchema ]),
  where: LeadProductFitWhereInputSchema.optional(),
}).strict() ;

export default LeadProductFitUpdateManyArgsSchema;
