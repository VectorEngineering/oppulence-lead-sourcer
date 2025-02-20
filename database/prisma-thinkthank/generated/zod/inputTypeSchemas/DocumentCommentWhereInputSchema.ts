import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ContractDocumentRelationFilterSchema } from './ContractDocumentRelationFilterSchema';
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema';

export const DocumentCommentWhereInputSchema: z.ZodType<Prisma.DocumentCommentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DocumentCommentWhereInputSchema),z.lazy(() => DocumentCommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentCommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentCommentWhereInputSchema),z.lazy(() => DocumentCommentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCommentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  document: z.union([ z.lazy(() => ContractDocumentRelationFilterSchema),z.lazy(() => ContractDocumentWhereInputSchema) ]).optional(),
}).strict();

export default DocumentCommentWhereInputSchema;
