import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadContactPreferenceUncheckedCreateInputSchema: z.ZodType<Prisma.LeadContactPreferenceUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  method: z.string(),
  preferredTime: z.string(),
  preferredDays: z.string(),
  timezone: z.string(),
  notes: z.string().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();

export default LeadContactPreferenceUncheckedCreateInputSchema;
