import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadComplianceAuditMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadComplianceAuditMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  findings: z.lazy(() => SortOrderSchema).optional(),
  riskLevel: z.lazy(() => SortOrderSchema).optional(),
  reviewedBy: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  nextReviewDate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadComplianceAuditMinOrderByAggregateInputSchema;
