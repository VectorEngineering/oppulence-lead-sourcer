import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxActivityOrderByRelevanceFieldEnumSchema } from './InboxActivityOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxActivityOrderByRelevanceInputSchema: z.ZodType<Prisma.InboxActivityOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InboxActivityOrderByRelevanceFieldEnumSchema),z.lazy(() => InboxActivityOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InboxActivityOrderByRelevanceInputSchema;
