import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumComplianceTypeWithAggregatesFilterSchema } from './EnumComplianceTypeWithAggregatesFilterSchema';
import { ComplianceTypeSchema } from './ComplianceTypeSchema';
import { EnumComplianceStatusWithAggregatesFilterSchema } from './EnumComplianceStatusWithAggregatesFilterSchema';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadComplianceAuditScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadComplianceAuditScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadComplianceAuditScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadComplianceAuditScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadComplianceAuditScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadComplianceAuditScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadComplianceAuditScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumComplianceTypeWithAggregatesFilterSchema),z.lazy(() => ComplianceTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumComplianceStatusWithAggregatesFilterSchema),z.lazy(() => ComplianceStatusSchema) ]).optional(),
  findings: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  requirements: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  documentation: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  evidences: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  riskLevel: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  riskFactors: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  mitigationSteps: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  reviewedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reviewedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextReviewDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadComplianceAuditScalarWhereWithAggregatesInputSchema;
