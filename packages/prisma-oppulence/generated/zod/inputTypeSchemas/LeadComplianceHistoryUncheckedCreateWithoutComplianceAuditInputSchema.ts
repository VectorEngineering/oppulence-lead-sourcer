import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  status: z.string(),
  notes: z.string(),
  performedBy: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema;
