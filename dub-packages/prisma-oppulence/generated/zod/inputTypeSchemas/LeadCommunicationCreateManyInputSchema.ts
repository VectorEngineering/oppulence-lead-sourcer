import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadCommunicationCreateManyInputSchema: z.ZodType<Prisma.LeadCommunicationCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
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

export default LeadCommunicationCreateManyInputSchema;
