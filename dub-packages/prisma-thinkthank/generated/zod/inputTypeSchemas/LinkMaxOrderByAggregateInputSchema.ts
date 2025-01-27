import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LinkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LinkMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  domain: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  shortLink: z.lazy(() => SortOrderSchema).optional(),
  archived: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  expiredUrl: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  trackConversion: z.lazy(() => SortOrderSchema).optional(),
  proxy: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => SortOrderSchema).optional(),
  utm_source: z.lazy(() => SortOrderSchema).optional(),
  utm_medium: z.lazy(() => SortOrderSchema).optional(),
  utm_campaign: z.lazy(() => SortOrderSchema).optional(),
  utm_term: z.lazy(() => SortOrderSchema).optional(),
  utm_content: z.lazy(() => SortOrderSchema).optional(),
  rewrite: z.lazy(() => SortOrderSchema).optional(),
  doIndex: z.lazy(() => SortOrderSchema).optional(),
  ios: z.lazy(() => SortOrderSchema).optional(),
  android: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  externalId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  publicStats: z.lazy(() => SortOrderSchema).optional(),
  clicks: z.lazy(() => SortOrderSchema).optional(),
  lastClicked: z.lazy(() => SortOrderSchema).optional(),
  leads: z.lazy(() => SortOrderSchema).optional(),
  sales: z.lazy(() => SortOrderSchema).optional(),
  saleAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LinkMaxOrderByAggregateInputSchema;
