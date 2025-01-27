import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractTemplateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContractTemplateAvgOrderByAggregateInput> = z.object({
  version: z.lazy(() => SortOrderSchema).optional(),
  useCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractTemplateAvgOrderByAggregateInputSchema;
