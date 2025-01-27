import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const LinkWebhookScalarWhereInputSchema: z.ZodType<Prisma.LinkWebhookScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkWebhookScalarWhereInputSchema),z.lazy(() => LinkWebhookScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkWebhookScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkWebhookScalarWhereInputSchema),z.lazy(() => LinkWebhookScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  webhookId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default LinkWebhookScalarWhereInputSchema;
