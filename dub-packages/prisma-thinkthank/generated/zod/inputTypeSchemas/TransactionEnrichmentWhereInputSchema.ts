import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const TransactionEnrichmentWhereInputSchema: z.ZodType<Prisma.TransactionEnrichmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionEnrichmentWhereInputSchema),z.lazy(() => TransactionEnrichmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionEnrichmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionEnrichmentWhereInputSchema),z.lazy(() => TransactionEnrichmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  categorySlug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  website: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantLocation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantLogo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  merchantMetadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  source: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  matchingRules: z.lazy(() => JsonNullableFilterSchema).optional(),
  patterns: z.lazy(() => JsonNullableFilterSchema).optional(),
  keywords: z.lazy(() => JsonNullableFilterSchema).optional(),
  sentiment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  riskScore: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  anomalyScore: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  isRecurring: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  isSubscription: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  isBillPayment: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  isRefund: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  customData: z.lazy(() => JsonNullableFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  system: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  priority: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAppliedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export default TransactionEnrichmentWhereInputSchema;
