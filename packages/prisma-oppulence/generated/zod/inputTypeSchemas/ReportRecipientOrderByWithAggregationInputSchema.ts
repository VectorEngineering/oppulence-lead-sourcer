import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReportRecipientCountOrderByAggregateInputSchema } from './ReportRecipientCountOrderByAggregateInputSchema';
import { ReportRecipientMaxOrderByAggregateInputSchema } from './ReportRecipientMaxOrderByAggregateInputSchema';
import { ReportRecipientMinOrderByAggregateInputSchema } from './ReportRecipientMinOrderByAggregateInputSchema';

export const ReportRecipientOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportRecipientOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReportRecipientCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReportRecipientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReportRecipientMinOrderByAggregateInputSchema).optional()
}).strict();

export default ReportRecipientOrderByWithAggregationInputSchema;
