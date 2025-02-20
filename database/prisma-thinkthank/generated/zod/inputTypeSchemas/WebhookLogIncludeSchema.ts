import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookArgsSchema } from "../outputTypeSchemas/WebhookArgsSchema"

export const WebhookLogIncludeSchema: z.ZodType<Prisma.WebhookLogInclude> = z.object({
  webhook: z.union([z.boolean(),z.lazy(() => WebhookArgsSchema)]).optional(),
}).strict()

export default WebhookLogIncludeSchema;
