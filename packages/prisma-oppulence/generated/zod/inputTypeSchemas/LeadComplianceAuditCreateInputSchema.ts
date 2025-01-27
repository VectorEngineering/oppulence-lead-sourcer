import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceTypeSchema } from './ComplianceTypeSchema';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LeadCreateNestedOneWithoutLeadComplianceAuditInputSchema } from './LeadCreateNestedOneWithoutLeadComplianceAuditInputSchema';
import { LeadComplianceHistoryCreateNestedManyWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateNestedManyWithoutComplianceAuditInputSchema';

export const LeadComplianceAuditCreateInputSchema: z.ZodType<Prisma.LeadComplianceAuditCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ComplianceTypeSchema),
  status: z.lazy(() => ComplianceStatusSchema).optional(),
  findings: z.string().optional().nullable(),
  requirements: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  documentation: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  evidences: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  riskLevel: z.string(),
  riskFactors: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  mitigationSteps: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  reviewedBy: z.string().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  nextReviewDate: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutLeadComplianceAuditInputSchema),
  auditHistory: z.lazy(() => LeadComplianceHistoryCreateNestedManyWithoutComplianceAuditInputSchema).optional()
}).strict();

export default LeadComplianceAuditCreateInputSchema;
