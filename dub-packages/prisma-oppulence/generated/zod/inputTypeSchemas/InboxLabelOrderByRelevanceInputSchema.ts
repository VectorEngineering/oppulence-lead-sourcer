import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxLabelOrderByRelevanceFieldEnumSchema } from './InboxLabelOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxLabelOrderByRelevanceInputSchema: z.ZodType<Prisma.InboxLabelOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InboxLabelOrderByRelevanceFieldEnumSchema),z.lazy(() => InboxLabelOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InboxLabelOrderByRelevanceInputSchema;
