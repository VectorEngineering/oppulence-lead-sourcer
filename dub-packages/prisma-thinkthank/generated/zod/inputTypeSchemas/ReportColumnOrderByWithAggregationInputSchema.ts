import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReportColumnCountOrderByAggregateInputSchema } from './ReportColumnCountOrderByAggregateInputSchema';
import { ReportColumnAvgOrderByAggregateInputSchema } from './ReportColumnAvgOrderByAggregateInputSchema';
import { ReportColumnMaxOrderByAggregateInputSchema } from './ReportColumnMaxOrderByAggregateInputSchema';
import { ReportColumnMinOrderByAggregateInputSchema } from './ReportColumnMinOrderByAggregateInputSchema';
import { ReportColumnSumOrderByAggregateInputSchema } from './ReportColumnSumOrderByAggregateInputSchema';

export const ReportColumnOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportColumnOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  width: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  isVisible: z.lazy(() => SortOrderSchema).optional(),
  format: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ReportColumnCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReportColumnAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReportColumnMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReportColumnMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReportColumnSumOrderByAggregateInputSchema).optional()
}).strict();

export default ReportColumnOrderByWithAggregationInputSchema;
