import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkArgsSchema } from "../outputTypeSchemas/LinkArgsSchema"
import { WebhookArgsSchema } from "../outputTypeSchemas/WebhookArgsSchema"

export const LinkWebhookIncludeSchema: z.ZodType<Prisma.LinkWebhookInclude> = z.object({
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
  webhook: z.union([z.boolean(),z.lazy(() => WebhookArgsSchema)]).optional(),
}).strict()

export default LinkWebhookIncludeSchema;
