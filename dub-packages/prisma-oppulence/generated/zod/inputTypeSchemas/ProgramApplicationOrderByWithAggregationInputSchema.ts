import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProgramApplicationCountOrderByAggregateInputSchema } from './ProgramApplicationCountOrderByAggregateInputSchema';
import { ProgramApplicationMaxOrderByAggregateInputSchema } from './ProgramApplicationMaxOrderByAggregateInputSchema';
import { ProgramApplicationMinOrderByAggregateInputSchema } from './ProgramApplicationMinOrderByAggregateInputSchema';

export const ProgramApplicationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProgramApplicationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  proposal: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  website: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProgramApplicationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProgramApplicationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProgramApplicationMinOrderByAggregateInputSchema).optional()
}).strict();

export default ProgramApplicationOrderByWithAggregationInputSchema;
