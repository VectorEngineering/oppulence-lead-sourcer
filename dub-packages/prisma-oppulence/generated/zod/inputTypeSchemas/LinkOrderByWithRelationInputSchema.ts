import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { DomainOrderByWithRelationInputSchema } from './DomainOrderByWithRelationInputSchema';
import { LinkTagOrderByRelationAggregateInputSchema } from './LinkTagOrderByRelationAggregateInputSchema';
import { LinkWebhookOrderByRelationAggregateInputSchema } from './LinkWebhookOrderByRelationAggregateInputSchema';
import { DashboardOrderByWithRelationInputSchema } from './DashboardOrderByWithRelationInputSchema';
import { ProgramEnrollmentOrderByWithRelationInputSchema } from './ProgramEnrollmentOrderByWithRelationInputSchema';
import { ProgramInviteOrderByWithRelationInputSchema } from './ProgramInviteOrderByWithRelationInputSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { CustomerOrderByRelationAggregateInputSchema } from './CustomerOrderByRelationAggregateInputSchema';
import { LinkOrderByRelevanceInputSchema } from './LinkOrderByRelevanceInputSchema';

export const LinkOrderByWithRelationInputSchema: z.ZodType<Prisma.LinkOrderByWithRelationInput> = z.object({
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
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  projectDomain: z.lazy(() => DomainOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => LinkTagOrderByRelationAggregateInputSchema).optional(),
  webhooks: z.lazy(() => LinkWebhookOrderByRelationAggregateInputSchema).optional(),
  dashboard: z.lazy(() => DashboardOrderByWithRelationInputSchema).optional(),
  programEnrollment: z.lazy(() => ProgramEnrollmentOrderByWithRelationInputSchema).optional(),
  programInvite: z.lazy(() => ProgramInviteOrderByWithRelationInputSchema).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  customers: z.lazy(() => CustomerOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LinkOrderByRelevanceInputSchema).optional()
}).strict();

export default LinkOrderByWithRelationInputSchema;
