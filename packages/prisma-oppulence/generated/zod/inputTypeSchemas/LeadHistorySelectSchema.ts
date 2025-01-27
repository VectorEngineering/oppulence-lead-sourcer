import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"

export const LeadHistorySelectSchema: z.ZodType<Prisma.LeadHistorySelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  action: z.boolean().optional(),
  description: z.boolean().optional(),
  changes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  changeType: z.boolean().optional(),
  source: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export default LeadHistorySelectSchema;
