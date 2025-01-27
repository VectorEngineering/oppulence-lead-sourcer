import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractTemplateSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContractTemplateSumOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  useCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractTemplateSumOrderByAggregateInputSchema;
