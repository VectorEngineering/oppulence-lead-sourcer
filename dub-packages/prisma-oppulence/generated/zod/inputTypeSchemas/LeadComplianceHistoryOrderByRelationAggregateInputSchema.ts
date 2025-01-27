import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadComplianceHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadComplianceHistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadComplianceHistoryOrderByRelationAggregateInputSchema;
