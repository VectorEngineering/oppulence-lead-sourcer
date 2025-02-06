import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContractSumOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  terminationFee: z.lazy(() => SortOrderSchema).optional(),
  limitationOfLiability: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractSumOrderByAggregateInputSchema;
