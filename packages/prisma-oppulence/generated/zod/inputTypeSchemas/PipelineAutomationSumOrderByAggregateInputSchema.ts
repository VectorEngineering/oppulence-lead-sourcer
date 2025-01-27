import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineAutomationSumOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineAutomationSumOrderByAggregateInput> = z.object({
  priority: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineAutomationSumOrderByAggregateInputSchema;
