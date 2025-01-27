import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadComplianceHistoryCreateManyComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryCreateManyComplianceAuditInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  status: z.string(),
  notes: z.string(),
  performedBy: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadComplianceHistoryCreateManyComplianceAuditInputSchema;
