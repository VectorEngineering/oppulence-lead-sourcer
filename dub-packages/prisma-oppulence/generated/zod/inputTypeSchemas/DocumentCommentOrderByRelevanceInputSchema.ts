import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCommentOrderByRelevanceFieldEnumSchema } from './DocumentCommentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentCommentOrderByRelevanceInputSchema: z.ZodType<Prisma.DocumentCommentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DocumentCommentOrderByRelevanceFieldEnumSchema),z.lazy(() => DocumentCommentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DocumentCommentOrderByRelevanceInputSchema;
