import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadComplianceAuditWhereInputSchema } from './LeadComplianceAuditWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumComplianceTypeFilterSchema } from './EnumComplianceTypeFilterSchema';
import { ComplianceTypeSchema } from './ComplianceTypeSchema';
import { EnumComplianceStatusFilterSchema } from './EnumComplianceStatusFilterSchema';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadComplianceHistoryListRelationFilterSchema } from './LeadComplianceHistoryListRelationFilterSchema';

export const LeadComplianceAuditWhereUniqueInputSchema: z.ZodType<Prisma.LeadComplianceAuditWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => LeadComplianceAuditWhereInputSchema),z.lazy(() => LeadComplianceAuditWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadComplianceAuditWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadComplianceAuditWhereInputSchema),z.lazy(() => LeadComplianceAuditWhereInputSchema).array() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumComplianceTypeFilterSchema),z.lazy(() => ComplianceTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumComplianceStatusFilterSchema),z.lazy(() => ComplianceStatusSchema) ]).optional(),
  findings: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  requirements: z.lazy(() => JsonFilterSchema).optional(),
  documentation: z.lazy(() => JsonFilterSchema).optional(),
  evidences: z.lazy(() => JsonFilterSchema).optional(),
  riskLevel: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  riskFactors: z.lazy(() => JsonFilterSchema).optional(),
  mitigationSteps: z.lazy(() => JsonFilterSchema).optional(),
  reviewedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextReviewDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
  auditHistory: z.lazy(() => LeadComplianceHistoryListRelationFilterSchema).optional()
}).strict());

export default LeadComplianceAuditWhereUniqueInputSchema;
