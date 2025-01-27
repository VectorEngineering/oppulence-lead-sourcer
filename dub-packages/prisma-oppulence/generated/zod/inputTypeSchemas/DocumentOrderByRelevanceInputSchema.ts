import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentOrderByRelevanceFieldEnumSchema } from './DocumentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentOrderByRelevanceInputSchema: z.ZodType<Prisma.DocumentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DocumentOrderByRelevanceFieldEnumSchema),z.lazy(() => DocumentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DocumentOrderByRelevanceInputSchema;
