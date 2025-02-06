import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WebhookOrderByRelationAggregateInputSchema } from './WebhookOrderByRelationAggregateInputSchema';
import { BankConnectionOrderByWithRelationInputSchema } from './BankConnectionOrderByWithRelationInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { BankConnectionSettingsOrderByRelevanceInputSchema } from './BankConnectionSettingsOrderByRelevanceInputSchema';

export const BankConnectionSettingsOrderByWithRelationInputSchema: z.ZodType<Prisma.BankConnectionSettingsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  syncEnabled: z.lazy(() => SortOrderSchema).optional(),
  syncStartTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  syncDayOfWeek: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  syncDayOfMonth: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  syncFrequency: z.lazy(() => SortOrderSchema).optional(),
  connectionTimeout: z.lazy(() => SortOrderSchema).optional(),
  readTimeout: z.lazy(() => SortOrderSchema).optional(),
  maxRequestsPerHour: z.lazy(() => SortOrderSchema).optional(),
  maxConcurrentRequests: z.lazy(() => SortOrderSchema).optional(),
  syncTransactions: z.lazy(() => SortOrderSchema).optional(),
  syncBalances: z.lazy(() => SortOrderSchema).optional(),
  syncStatements: z.lazy(() => SortOrderSchema).optional(),
  syncIdentity: z.lazy(() => SortOrderSchema).optional(),
  syncCategories: z.lazy(() => SortOrderSchema).optional(),
  syncMerchants: z.lazy(() => SortOrderSchema).optional(),
  syncAttachments: z.lazy(() => SortOrderSchema).optional(),
  historicalDays: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenEnabled: z.lazy(() => SortOrderSchema).optional(),
  autoReconnectEnabled: z.lazy(() => SortOrderSchema).optional(),
  connectionStatus: z.lazy(() => SortOrderSchema).optional(),
  bankConnectionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  merchantEnrichmentEnabled: z.lazy(() => SortOrderSchema).optional(),
  merchantCategorizationEnabled: z.lazy(() => SortOrderSchema).optional(),
  merchantLogoEnrichmentEnabled: z.lazy(() => SortOrderSchema).optional(),
  merchantNameCleaningEnabled: z.lazy(() => SortOrderSchema).optional(),
  webhooks: z.lazy(() => WebhookOrderByRelationAggregateInputSchema).optional(),
  bankConnection: z.lazy(() => BankConnectionOrderByWithRelationInputSchema).optional(),
  creator: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => BankConnectionSettingsOrderByRelevanceInputSchema).optional()
}).strict();

export default BankConnectionSettingsOrderByWithRelationInputSchema;
