import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSocialProfileUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadSocialProfileUpdateManyMutationInputSchema'
import { LeadSocialProfileUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadSocialProfileUncheckedUpdateManyInputSchema'
import { LeadSocialProfileWhereInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereInputSchema'

export const LeadSocialProfileUpdateManyArgsSchema: z.ZodType<Prisma.LeadSocialProfileUpdateManyArgs> = z.object({
  data: z.union([ LeadSocialProfileUpdateManyMutationInputSchema,LeadSocialProfileUncheckedUpdateManyInputSchema ]),
  where: LeadSocialProfileWhereInputSchema.optional(),
}).strict() ;

export default LeadSocialProfileUpdateManyArgsSchema;
