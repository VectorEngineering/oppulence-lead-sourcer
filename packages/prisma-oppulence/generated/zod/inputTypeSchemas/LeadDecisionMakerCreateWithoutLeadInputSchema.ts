import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadDecisionMakerCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadDecisionMakerCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  influence: z.string(),
  notes: z.string().optional().nullable()
}).strict();

export default LeadDecisionMakerCreateWithoutLeadInputSchema;
