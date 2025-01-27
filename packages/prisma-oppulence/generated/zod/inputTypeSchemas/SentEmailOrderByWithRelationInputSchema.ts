import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { SentEmailOrderByRelevanceInputSchema } from './SentEmailOrderByRelevanceInputSchema';

export const SentEmailOrderByWithRelationInputSchema: z.ZodType<Prisma.SentEmailOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => SentEmailOrderByRelevanceInputSchema).optional()
}).strict();

export default SentEmailOrderByWithRelationInputSchema;
