import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LinkCountOrderByAggregateInputSchema } from './LinkCountOrderByAggregateInputSchema';
import { LinkAvgOrderByAggregateInputSchema } from './LinkAvgOrderByAggregateInputSchema';
import { LinkMaxOrderByAggregateInputSchema } from './LinkMaxOrderByAggregateInputSchema';
import { LinkMinOrderByAggregateInputSchema } from './LinkMinOrderByAggregateInputSchema';
import { LinkSumOrderByAggregateInputSchema } from './LinkSumOrderByAggregateInputSchema';

export const LinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.LinkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  domain: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  shortLink: z.lazy(() => SortOrderSchema).optional(),
  archived: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expiredUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  trackConversion: z.lazy(() => SortOrderSchema).optional(),
  proxy: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  video: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utm_source: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utm_medium: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utm_campaign: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utm_term: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utm_content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rewrite: z.lazy(() => SortOrderSchema).optional(),
  doIndex: z.lazy(() => SortOrderSchema).optional(),
  ios: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  android: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  externalId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tenantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  publicStats: z.lazy(() => SortOrderSchema).optional(),
  clicks: z.lazy(() => SortOrderSchema).optional(),
  lastClicked: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  leads: z.lazy(() => SortOrderSchema).optional(),
  sales: z.lazy(() => SortOrderSchema).optional(),
  saleAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  programId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LinkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LinkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LinkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LinkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LinkSumOrderByAggregateInputSchema).optional()
}).strict();

export default LinkOrderByWithAggregationInputSchema;
