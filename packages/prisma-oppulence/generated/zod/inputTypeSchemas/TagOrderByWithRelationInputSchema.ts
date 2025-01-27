import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { LinkTagOrderByRelationAggregateInputSchema } from './LinkTagOrderByRelationAggregateInputSchema';
import { CustomerTagOrderByRelationAggregateInputSchema } from './CustomerTagOrderByRelationAggregateInputSchema';
import { LeadOrderByRelationAggregateInputSchema } from './LeadOrderByRelationAggregateInputSchema';
import { TagOrderByRelevanceInputSchema } from './TagOrderByRelevanceInputSchema';

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  context: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  confidence: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  links: z.lazy(() => LinkTagOrderByRelationAggregateInputSchema).optional(),
  CustomerTag: z.lazy(() => CustomerTagOrderByRelationAggregateInputSchema).optional(),
  Lead: z.lazy(() => LeadOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => TagOrderByRelevanceInputSchema).optional()
}).strict();

export default TagOrderByWithRelationInputSchema;
