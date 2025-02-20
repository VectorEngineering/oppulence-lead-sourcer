import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookLogIncludeSchema } from '../inputTypeSchemas/WebhookLogIncludeSchema'
import { WebhookLogCreateInputSchema } from '../inputTypeSchemas/WebhookLogCreateInputSchema'
import { WebhookLogUncheckedCreateInputSchema } from '../inputTypeSchemas/WebhookLogUncheckedCreateInputSchema'
import { WebhookArgsSchema } from "../outputTypeSchemas/WebhookArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebhookLogSelectSchema: z.ZodType<Prisma.WebhookLogSelect> = z.object({
  id: z.boolean().optional(),
  webhookId: z.boolean().optional(),
  requestBody: z.boolean().optional(),
  responseBody: z.boolean().optional(),
  statusCode: z.boolean().optional(),
  duration: z.boolean().optional(),
  success: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  timestamp: z.boolean().optional(),
  webhook: z.union([z.boolean(),z.lazy(() => WebhookArgsSchema)]).optional(),
}).strict()

export const WebhookLogCreateArgsSchema: z.ZodType<Prisma.WebhookLogCreateArgs> = z.object({
  select: WebhookLogSelectSchema.optional(),
  include: WebhookLogIncludeSchema.optional(),
  data: z.union([ WebhookLogCreateInputSchema,WebhookLogUncheckedCreateInputSchema ]),
}).strict() ;

export default WebhookLogCreateArgsSchema;
