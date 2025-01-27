import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { InstalledIntegrationOrderByWithRelationInputSchema } from './InstalledIntegrationOrderByWithRelationInputSchema';
import { LinkWebhookOrderByRelationAggregateInputSchema } from './LinkWebhookOrderByRelationAggregateInputSchema';
import { WebhookLogOrderByRelationAggregateInputSchema } from './WebhookLogOrderByRelationAggregateInputSchema';
import { BankConnectionSettingsOrderByRelationAggregateInputSchema } from './BankConnectionSettingsOrderByRelationAggregateInputSchema';
import { WebhookOrderByRelevanceInputSchema } from './WebhookOrderByRelevanceInputSchema';

export const WebhookOrderByWithRelationInputSchema: z.ZodType<Prisma.WebhookOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  installationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  receiver: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  triggers: z.lazy(() => SortOrderSchema).optional(),
  consecutiveFailures: z.lazy(() => SortOrderSchema).optional(),
  lastFailedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  disabledAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  maxRetries: z.lazy(() => SortOrderSchema).optional(),
  lastErrorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  timeout: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  verificationToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipWhitelist: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rateLimitPerMinute: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  installedIntegration: z.lazy(() => InstalledIntegrationOrderByWithRelationInputSchema).optional(),
  links: z.lazy(() => LinkWebhookOrderByRelationAggregateInputSchema).optional(),
  logs: z.lazy(() => WebhookLogOrderByRelationAggregateInputSchema).optional(),
  bankConnectionSettings: z.lazy(() => BankConnectionSettingsOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => WebhookOrderByRelevanceInputSchema).optional()
}).strict();

export default WebhookOrderByWithRelationInputSchema;
