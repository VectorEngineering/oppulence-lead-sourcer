import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionAttachmentOrderByRelevanceFieldEnumSchema } from './TransactionAttachmentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionAttachmentOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionAttachmentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TransactionAttachmentOrderByRelevanceFieldEnumSchema),z.lazy(() => TransactionAttachmentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TransactionAttachmentOrderByRelevanceInputSchema;
