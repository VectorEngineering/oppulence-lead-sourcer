import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookOrderByRelevanceFieldEnumSchema } from './WebhookOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookOrderByRelevanceInputSchema: z.ZodType<Prisma.WebhookOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WebhookOrderByRelevanceFieldEnumSchema),z.lazy(() => WebhookOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WebhookOrderByRelevanceInputSchema;
