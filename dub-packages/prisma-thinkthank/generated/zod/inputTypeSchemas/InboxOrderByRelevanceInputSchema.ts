import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxOrderByRelevanceFieldEnumSchema } from './InboxOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxOrderByRelevanceInputSchema: z.ZodType<Prisma.InboxOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InboxOrderByRelevanceFieldEnumSchema),z.lazy(() => InboxOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InboxOrderByRelevanceInputSchema;
