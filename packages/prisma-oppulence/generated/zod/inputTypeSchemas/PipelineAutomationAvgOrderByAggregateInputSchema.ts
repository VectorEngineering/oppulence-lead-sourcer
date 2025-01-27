import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineAutomationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineAutomationAvgOrderByAggregateInput> = z.object({
  priority: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineAutomationAvgOrderByAggregateInputSchema;
