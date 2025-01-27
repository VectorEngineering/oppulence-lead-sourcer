import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadComplianceHistoryFindManyArgsSchema } from "../outputTypeSchemas/LeadComplianceHistoryFindManyArgsSchema"
import { LeadComplianceAuditCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadComplianceAuditCountOutputTypeArgsSchema"

export const LeadComplianceAuditSelectSchema: z.ZodType<Prisma.LeadComplianceAuditSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  findings: z.boolean().optional(),
  requirements: z.boolean().optional(),
  documentation: z.boolean().optional(),
  evidences: z.boolean().optional(),
  riskLevel: z.boolean().optional(),
  riskFactors: z.boolean().optional(),
  mitigationSteps: z.boolean().optional(),
  reviewedBy: z.boolean().optional(),
  reviewedAt: z.boolean().optional(),
  nextReviewDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  auditHistory: z.union([z.boolean(),z.lazy(() => LeadComplianceHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadComplianceAuditCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default LeadComplianceAuditSelectSchema;
