import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceUncheckedCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  method: z.string(),
  preferredTime: z.string(),
  preferredDays: z.string(),
  timezone: z.string(),
  notes: z.string().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();

export default LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema;
