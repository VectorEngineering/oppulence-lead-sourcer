import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentAnnotationCountOrderByAggregateInputSchema } from './DocumentAnnotationCountOrderByAggregateInputSchema';
import { DocumentAnnotationAvgOrderByAggregateInputSchema } from './DocumentAnnotationAvgOrderByAggregateInputSchema';
import { DocumentAnnotationMaxOrderByAggregateInputSchema } from './DocumentAnnotationMaxOrderByAggregateInputSchema';
import { DocumentAnnotationMinOrderByAggregateInputSchema } from './DocumentAnnotationMinOrderByAggregateInputSchema';
import { DocumentAnnotationSumOrderByAggregateInputSchema } from './DocumentAnnotationSumOrderByAggregateInputSchema';

export const DocumentAnnotationOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocumentAnnotationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  pageNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  coordinates: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DocumentAnnotationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DocumentAnnotationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocumentAnnotationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocumentAnnotationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DocumentAnnotationSumOrderByAggregateInputSchema).optional()
}).strict();

export default DocumentAnnotationOrderByWithAggregationInputSchema;
