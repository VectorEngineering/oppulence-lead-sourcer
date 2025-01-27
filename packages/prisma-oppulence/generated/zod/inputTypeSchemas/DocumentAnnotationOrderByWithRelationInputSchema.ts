import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ContractDocumentOrderByWithRelationInputSchema } from './ContractDocumentOrderByWithRelationInputSchema';
import { DocumentAnnotationOrderByRelevanceInputSchema } from './DocumentAnnotationOrderByRelevanceInputSchema';

export const DocumentAnnotationOrderByWithRelationInputSchema: z.ZodType<Prisma.DocumentAnnotationOrderByWithRelationInput> = z.object({
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
  document: z.lazy(() => ContractDocumentOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DocumentAnnotationOrderByRelevanceInputSchema).optional()
}).strict();

export default DocumentAnnotationOrderByWithRelationInputSchema;
