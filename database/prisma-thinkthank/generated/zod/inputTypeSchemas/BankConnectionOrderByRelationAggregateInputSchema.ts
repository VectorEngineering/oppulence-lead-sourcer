import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankConnectionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BankConnectionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankConnectionOrderByRelationAggregateInputSchema;
