import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineIntegrationCountOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineIntegrationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  lastSyncedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PipelineIntegrationCountOrderByAggregateInputSchema;
