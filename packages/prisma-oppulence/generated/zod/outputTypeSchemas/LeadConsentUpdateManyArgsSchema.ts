import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadConsentUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadConsentUpdateManyMutationInputSchema'
import { LeadConsentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadConsentUncheckedUpdateManyInputSchema'
import { LeadConsentWhereInputSchema } from '../inputTypeSchemas/LeadConsentWhereInputSchema'

export const LeadConsentUpdateManyArgsSchema: z.ZodType<Prisma.LeadConsentUpdateManyArgs> = z.object({
  data: z.union([ LeadConsentUpdateManyMutationInputSchema,LeadConsentUncheckedUpdateManyInputSchema ]),
  where: LeadConsentWhereInputSchema.optional(),
}).strict() ;

export default LeadConsentUpdateManyArgsSchema;
