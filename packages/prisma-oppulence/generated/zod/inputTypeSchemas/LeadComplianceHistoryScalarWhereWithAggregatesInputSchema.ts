import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadComplianceHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadComplianceHistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadComplianceHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadComplianceHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadComplianceHistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadComplianceHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadComplianceHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  complianceAuditId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  performedBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadComplianceHistoryScalarWhereWithAggregatesInputSchema;
