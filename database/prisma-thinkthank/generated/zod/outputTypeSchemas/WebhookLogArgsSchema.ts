import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookLogSelectSchema } from '../inputTypeSchemas/WebhookLogSelectSchema';
import { WebhookLogIncludeSchema } from '../inputTypeSchemas/WebhookLogIncludeSchema';

export const WebhookLogArgsSchema: z.ZodType<Prisma.WebhookLogDefaultArgs> = z.object({
  select: z.lazy(() => WebhookLogSelectSchema).optional(),
  include: z.lazy(() => WebhookLogIncludeSchema).optional(),
}).strict();

export default WebhookLogArgsSchema;
