import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookSelectSchema } from '../inputTypeSchemas/WebhookSelectSchema';
import { WebhookIncludeSchema } from '../inputTypeSchemas/WebhookIncludeSchema';

export const WebhookArgsSchema: z.ZodType<Prisma.WebhookDefaultArgs> = z.object({
  select: z.lazy(() => WebhookSelectSchema).optional(),
  include: z.lazy(() => WebhookIncludeSchema).optional(),
}).strict();

export default WebhookArgsSchema;
