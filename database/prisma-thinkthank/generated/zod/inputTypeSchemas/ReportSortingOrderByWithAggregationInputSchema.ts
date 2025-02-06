import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReportSortingCountOrderByAggregateInputSchema } from './ReportSortingCountOrderByAggregateInputSchema';
import { ReportSortingAvgOrderByAggregateInputSchema } from './ReportSortingAvgOrderByAggregateInputSchema';
import { ReportSortingMaxOrderByAggregateInputSchema } from './ReportSortingMaxOrderByAggregateInputSchema';
import { ReportSortingMinOrderByAggregateInputSchema } from './ReportSortingMinOrderByAggregateInputSchema';
import { ReportSortingSumOrderByAggregateInputSchema } from './ReportSortingSumOrderByAggregateInputSchema';

export const ReportSortingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportSortingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  direction: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReportSortingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReportSortingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReportSortingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReportSortingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReportSortingSumOrderByAggregateInputSchema).optional()
}).strict();

export default ReportSortingOrderByWithAggregationInputSchema;
