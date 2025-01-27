import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadRequirementUncheckedCreateInputSchema: z.ZodType<Prisma.LeadRequirementUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  category: z.string(),
  priority: z.string(),
  description: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable()
}).strict();

export default LeadRequirementUncheckedCreateInputSchema;
