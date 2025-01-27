import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LinkTagCountOrderByAggregateInputSchema } from './LinkTagCountOrderByAggregateInputSchema';
import { LinkTagMaxOrderByAggregateInputSchema } from './LinkTagMaxOrderByAggregateInputSchema';
import { LinkTagMinOrderByAggregateInputSchema } from './LinkTagMinOrderByAggregateInputSchema';

export const LinkTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.LinkTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LinkTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LinkTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LinkTagMinOrderByAggregateInputSchema).optional()
}).strict();

export default LinkTagOrderByWithAggregationInputSchema;
