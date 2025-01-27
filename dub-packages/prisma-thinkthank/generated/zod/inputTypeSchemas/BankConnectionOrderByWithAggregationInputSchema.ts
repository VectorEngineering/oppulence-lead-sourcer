import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BankConnectionCountOrderByAggregateInputSchema } from './BankConnectionCountOrderByAggregateInputSchema';
import { BankConnectionAvgOrderByAggregateInputSchema } from './BankConnectionAvgOrderByAggregateInputSchema';
import { BankConnectionMaxOrderByAggregateInputSchema } from './BankConnectionMaxOrderByAggregateInputSchema';
import { BankConnectionMinOrderByAggregateInputSchema } from './BankConnectionMinOrderByAggregateInputSchema';
import { BankConnectionSumOrderByAggregateInputSchema } from './BankConnectionSumOrderByAggregateInputSchema';

export const BankConnectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.BankConnectionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  institutionId: z.lazy(() => SortOrderSchema).optional(),
  institutionName: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  logoUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  primaryColor: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  provider: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  enrollmentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  referenceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentExpiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastAccessed: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastSuccessfulUpdate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextUpdateAttempt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updateFrequency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorDetails: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorRetries: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional(),
  lastErrorAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  supportsAccountIdentification: z.lazy(() => SortOrderSchema).optional(),
  supportsTransactionSync: z.lazy(() => SortOrderSchema).optional(),
  supportsBalanceRefresh: z.lazy(() => SortOrderSchema).optional(),
  supportedProducts: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BankConnectionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BankConnectionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BankConnectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BankConnectionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BankConnectionSumOrderByAggregateInputSchema).optional()
}).strict();

export default BankConnectionOrderByWithAggregationInputSchema;
