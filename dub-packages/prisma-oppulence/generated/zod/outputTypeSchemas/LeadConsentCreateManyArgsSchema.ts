import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadConsentCreateManyInputSchema } from '../inputTypeSchemas/LeadConsentCreateManyInputSchema'

export const LeadConsentCreateManyArgsSchema: z.ZodType<Prisma.LeadConsentCreateManyArgs> = z.object({
  data: z.union([ LeadConsentCreateManyInputSchema,LeadConsentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadConsentCreateManyArgsSchema;
