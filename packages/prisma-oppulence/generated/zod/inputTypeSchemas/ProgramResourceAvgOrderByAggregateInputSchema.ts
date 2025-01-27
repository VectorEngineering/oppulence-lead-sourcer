import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramResourceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramResourceAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProgramResourceAvgOrderByAggregateInputSchema;
