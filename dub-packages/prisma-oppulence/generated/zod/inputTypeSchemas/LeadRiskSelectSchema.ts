import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"

export const LeadRiskSelectSchema: z.ZodType<Prisma.LeadRiskSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  category: z.boolean().optional(),
  description: z.boolean().optional(),
  impact: z.boolean().optional(),
  probability: z.boolean().optional(),
  mitigation: z.boolean().optional(),
  status: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export default LeadRiskSelectSchema;
