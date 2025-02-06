import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentCommentCountOrderByAggregateInputSchema } from './DocumentCommentCountOrderByAggregateInputSchema';
import { DocumentCommentMaxOrderByAggregateInputSchema } from './DocumentCommentMaxOrderByAggregateInputSchema';
import { DocumentCommentMinOrderByAggregateInputSchema } from './DocumentCommentMinOrderByAggregateInputSchema';

export const DocumentCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocumentCommentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentCommentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DocumentCommentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocumentCommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocumentCommentMinOrderByAggregateInputSchema).optional()
}).strict();

export default DocumentCommentOrderByWithAggregationInputSchema;
