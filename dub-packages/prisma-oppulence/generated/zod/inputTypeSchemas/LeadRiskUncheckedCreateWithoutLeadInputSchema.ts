import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadRiskUncheckedCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadRiskUncheckedCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  category: z.string(),
  description: z.string(),
  impact: z.string(),
  probability: z.string(),
  mitigation: z.string(),
  status: z.string()
}).strict();

export default LeadRiskUncheckedCreateWithoutLeadInputSchema;
