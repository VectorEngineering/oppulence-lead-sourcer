import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceAuditArgsSchema } from "../outputTypeSchemas/LeadComplianceAuditArgsSchema"

export const LeadComplianceHistorySelectSchema: z.ZodType<Prisma.LeadComplianceHistorySelect> = z.object({
  id: z.boolean().optional(),
  complianceAuditId: z.boolean().optional(),
  action: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  performedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  complianceAudit: z.union([z.boolean(),z.lazy(() => LeadComplianceAuditArgsSchema)]).optional(),
}).strict()

export default LeadComplianceHistorySelectSchema;
