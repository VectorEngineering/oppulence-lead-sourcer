import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { DealOrderByRelationAggregateInputSchema } from './DealOrderByRelationAggregateInputSchema';
import { LeadOrderByRelationAggregateInputSchema } from './LeadOrderByRelationAggregateInputSchema';
import { DocumentOrderByRelevanceInputSchema } from './DocumentOrderByRelevanceInputSchema';

export const DocumentOrderByWithRelationInputSchema: z.ZodType<Prisma.DocumentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  body: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  objectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ownerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pathTokens: z.lazy(() => SortOrderSchema).optional(),
  tag: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  size: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mimeType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isConfidential: z.lazy(() => SortOrderSchema).optional(),
  documentType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  version: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shareableLink: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  Deal: z.lazy(() => DealOrderByRelationAggregateInputSchema).optional(),
  Lead: z.lazy(() => LeadOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => DocumentOrderByRelevanceInputSchema).optional()
}).strict();

export default DocumentOrderByWithRelationInputSchema;
