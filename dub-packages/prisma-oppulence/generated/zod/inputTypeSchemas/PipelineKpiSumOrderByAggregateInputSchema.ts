import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineKpiSumOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineKpiSumOrderByAggregateInput> = z.object({
  target: z.lazy(() => SortOrderSchema).optional(),
  current: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineKpiSumOrderByAggregateInputSchema;
