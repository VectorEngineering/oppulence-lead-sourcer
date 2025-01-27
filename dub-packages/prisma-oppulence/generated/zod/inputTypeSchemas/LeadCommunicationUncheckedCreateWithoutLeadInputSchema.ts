import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadCommunicationUncheckedCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommunicationUncheckedCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  direction: z.string(),
  subject: z.string().optional().nullable(),
  content: z.string(),
  outcome: z.string().optional().nullable(),
  duration: z.number().int().optional().nullable(),
  scheduledAt: z.coerce.date().optional().nullable(),
  completedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadCommunicationUncheckedCreateWithoutLeadInputSchema;
