import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramResourceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProgramResourceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProgramResourceOrderByRelationAggregateInputSchema;
