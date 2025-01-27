import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationOrderByRelevanceFieldEnumSchema } from './DocumentAnnotationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentAnnotationOrderByRelevanceInputSchema: z.ZodType<Prisma.DocumentAnnotationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DocumentAnnotationOrderByRelevanceFieldEnumSchema),z.lazy(() => DocumentAnnotationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DocumentAnnotationOrderByRelevanceInputSchema;
