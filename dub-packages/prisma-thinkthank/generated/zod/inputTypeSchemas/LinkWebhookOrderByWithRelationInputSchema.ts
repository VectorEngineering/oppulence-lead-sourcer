import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LinkOrderByWithRelationInputSchema } from './LinkOrderByWithRelationInputSchema';
import { WebhookOrderByWithRelationInputSchema } from './WebhookOrderByWithRelationInputSchema';
import { LinkWebhookOrderByRelevanceInputSchema } from './LinkWebhookOrderByRelevanceInputSchema';

export const LinkWebhookOrderByWithRelationInputSchema: z.ZodType<Prisma.LinkWebhookOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  webhookId: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => LinkOrderByWithRelationInputSchema).optional(),
  webhook: z.lazy(() => WebhookOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LinkWebhookOrderByRelevanceInputSchema).optional()
}).strict();

export default LinkWebhookOrderByWithRelationInputSchema;
