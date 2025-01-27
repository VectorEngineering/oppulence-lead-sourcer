import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadContactPreferenceSelectSchema } from '../inputTypeSchemas/LeadContactPreferenceSelectSchema';
import { LeadContactPreferenceIncludeSchema } from '../inputTypeSchemas/LeadContactPreferenceIncludeSchema';

export const LeadContactPreferenceArgsSchema: z.ZodType<Prisma.LeadContactPreferenceDefaultArgs> = z.object({
  select: z.lazy(() => LeadContactPreferenceSelectSchema).optional(),
  include: z.lazy(() => LeadContactPreferenceIncludeSchema).optional(),
}).strict();

export default LeadContactPreferenceArgsSchema;
