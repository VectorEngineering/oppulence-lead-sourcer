import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateNestedOneWithoutContactPreferencesInputSchema } from './LeadCreateNestedOneWithoutContactPreferencesInputSchema';

export const LeadContactPreferenceCreateInputSchema: z.ZodType<Prisma.LeadContactPreferenceCreateInput> = z.object({
  id: z.string().cuid().optional(),
  method: z.string(),
  preferredTime: z.string(),
  preferredDays: z.string(),
  timezone: z.string(),
  notes: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutContactPreferencesInputSchema)
}).strict();

export default LeadContactPreferenceCreateInputSchema;
