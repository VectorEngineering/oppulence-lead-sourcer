import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReportScheduleCountOrderByAggregateInputSchema } from './ReportScheduleCountOrderByAggregateInputSchema';
import { ReportScheduleAvgOrderByAggregateInputSchema } from './ReportScheduleAvgOrderByAggregateInputSchema';
import { ReportScheduleMaxOrderByAggregateInputSchema } from './ReportScheduleMaxOrderByAggregateInputSchema';
import { ReportScheduleMinOrderByAggregateInputSchema } from './ReportScheduleMinOrderByAggregateInputSchema';
import { ReportScheduleSumOrderByAggregateInputSchema } from './ReportScheduleSumOrderByAggregateInputSchema';

export const ReportScheduleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportScheduleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  frequency: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dayOfMonth: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  hour: z.lazy(() => SortOrderSchema).optional(),
  minute: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  lastRun: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextRun: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ReportScheduleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReportScheduleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReportScheduleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReportScheduleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReportScheduleSumOrderByAggregateInputSchema).optional()
}).strict();

export default ReportScheduleOrderByWithAggregationInputSchema;
