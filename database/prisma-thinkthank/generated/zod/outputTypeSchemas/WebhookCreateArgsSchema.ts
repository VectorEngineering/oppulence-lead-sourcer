import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookIncludeSchema } from '../inputTypeSchemas/WebhookIncludeSchema'
import { WebhookCreateInputSchema } from '../inputTypeSchemas/WebhookCreateInputSchema'
import { WebhookUncheckedCreateInputSchema } from '../inputTypeSchemas/WebhookUncheckedCreateInputSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { InstalledIntegrationArgsSchema } from "../outputTypeSchemas/InstalledIntegrationArgsSchema"
import { LinkWebhookFindManyArgsSchema } from "../outputTypeSchemas/LinkWebhookFindManyArgsSchema"
import { WebhookLogFindManyArgsSchema } from "../outputTypeSchemas/WebhookLogFindManyArgsSchema"
import { BankConnectionSettingsFindManyArgsSchema } from "../outputTypeSchemas/BankConnectionSettingsFindManyArgsSchema"
import { WebhookCountOutputTypeArgsSchema } from "../outputTypeSchemas/WebhookCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebhookSelectSchema: z.ZodType<Prisma.WebhookSelect> = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  installationId: z.boolean().optional(),
  receiver: z.boolean().optional(),
  name: z.boolean().optional(),
  url: z.boolean().optional(),
  secret: z.boolean().optional(),
  triggers: z.boolean().optional(),
  consecutiveFailures: z.boolean().optional(),
  lastFailedAt: z.boolean().optional(),
  disabledAt: z.boolean().optional(),
  maxRetries: z.boolean().optional(),
  lastErrorMessage: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  timeout: z.boolean().optional(),
  status: z.boolean().optional(),
  verificationToken: z.boolean().optional(),
  ipWhitelist: z.boolean().optional(),
  rateLimitPerMinute: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  installedIntegration: z.union([z.boolean(),z.lazy(() => InstalledIntegrationArgsSchema)]).optional(),
  links: z.union([z.boolean(),z.lazy(() => LinkWebhookFindManyArgsSchema)]).optional(),
  logs: z.union([z.boolean(),z.lazy(() => WebhookLogFindManyArgsSchema)]).optional(),
  bankConnectionSettings: z.union([z.boolean(),z.lazy(() => BankConnectionSettingsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WebhookCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WebhookCreateArgsSchema: z.ZodType<Prisma.WebhookCreateArgs> = z.object({
  select: WebhookSelectSchema.optional(),
  include: WebhookIncludeSchema.optional(),
  data: z.union([ WebhookCreateInputSchema,WebhookUncheckedCreateInputSchema ]),
}).strict() ;

export default WebhookCreateArgsSchema;
