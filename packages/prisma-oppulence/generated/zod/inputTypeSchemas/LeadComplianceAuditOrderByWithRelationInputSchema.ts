import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadComplianceHistoryOrderByRelationAggregateInputSchema } from './LeadComplianceHistoryOrderByRelationAggregateInputSchema';
import { LeadComplianceAuditOrderByRelevanceInputSchema } from './LeadComplianceAuditOrderByRelevanceInputSchema';

export const LeadComplianceAuditOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadComplianceAuditOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  findings: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requirements: z.lazy(() => SortOrderSchema).optional(),
  documentation: z.lazy(() => SortOrderSchema).optional(),
  evidences: z.lazy(() => SortOrderSchema).optional(),
  riskLevel: z.lazy(() => SortOrderSchema).optional(),
  riskFactors: z.lazy(() => SortOrderSchema).optional(),
  mitigationSteps: z.lazy(() => SortOrderSchema).optional(),
  reviewedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextReviewDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  auditHistory: z.lazy(() => LeadComplianceHistoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LeadComplianceAuditOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadComplianceAuditOrderByWithRelationInputSchema;
