import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentSumOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentSumOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DocumentSumOrderByAggregateInputSchema;
