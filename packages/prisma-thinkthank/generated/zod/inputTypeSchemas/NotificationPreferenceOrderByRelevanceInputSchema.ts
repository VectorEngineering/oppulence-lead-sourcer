import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationPreferenceOrderByRelevanceFieldEnumSchema } from './NotificationPreferenceOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const NotificationPreferenceOrderByRelevanceInputSchema: z.ZodType<Prisma.NotificationPreferenceOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => NotificationPreferenceOrderByRelevanceFieldEnumSchema),z.lazy(() => NotificationPreferenceOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default NotificationPreferenceOrderByRelevanceInputSchema;
