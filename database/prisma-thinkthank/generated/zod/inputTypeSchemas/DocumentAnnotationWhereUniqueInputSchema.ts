import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationWhereInputSchema } from './DocumentAnnotationWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ContractDocumentRelationFilterSchema } from './ContractDocumentRelationFilterSchema';
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema';

export const DocumentAnnotationWhereUniqueInputSchema: z.ZodType<Prisma.DocumentAnnotationWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => DocumentAnnotationWhereInputSchema),z.lazy(() => DocumentAnnotationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentAnnotationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentAnnotationWhereInputSchema),z.lazy(() => DocumentAnnotationWhereInputSchema).array() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageNumber: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  coordinates: z.lazy(() => JsonNullableFilterSchema).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  document: z.union([ z.lazy(() => ContractDocumentRelationFilterSchema),z.lazy(() => ContractDocumentWhereInputSchema) ]).optional(),
}).strict());

export default DocumentAnnotationWhereUniqueInputSchema;
