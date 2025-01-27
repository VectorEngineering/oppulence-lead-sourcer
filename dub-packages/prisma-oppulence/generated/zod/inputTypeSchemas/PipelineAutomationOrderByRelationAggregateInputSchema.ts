import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineAutomationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PipelineAutomationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineAutomationOrderByRelationAggregateInputSchema;
