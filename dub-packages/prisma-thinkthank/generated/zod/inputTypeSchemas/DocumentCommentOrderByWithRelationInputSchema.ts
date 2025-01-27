import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ContractDocumentOrderByWithRelationInputSchema } from './ContractDocumentOrderByWithRelationInputSchema';
import { DocumentCommentOrderByRelevanceInputSchema } from './DocumentCommentOrderByRelevanceInputSchema';

export const DocumentCommentOrderByWithRelationInputSchema: z.ZodType<Prisma.DocumentCommentOrderByWithRelationInput> = z.object({
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
  document: z.lazy(() => ContractDocumentOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DocumentCommentOrderByRelevanceInputSchema).optional()
}).strict();

export default DocumentCommentOrderByWithRelationInputSchema;
