import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StageRequiredFieldOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StageRequiredFieldOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StageRequiredFieldOrderByRelationAggregateInputSchema;
