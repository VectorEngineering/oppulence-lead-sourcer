import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadContactPreferenceCreateManyInputSchema } from '../inputTypeSchemas/LeadContactPreferenceCreateManyInputSchema'

export const LeadContactPreferenceCreateManyArgsSchema: z.ZodType<Prisma.LeadContactPreferenceCreateManyArgs> = z.object({
  data: z.union([ LeadContactPreferenceCreateManyInputSchema,LeadContactPreferenceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadContactPreferenceCreateManyArgsSchema;
