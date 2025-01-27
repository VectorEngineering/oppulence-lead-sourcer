import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LinkOrderByWithRelationInputSchema } from './LinkOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { DashboardOrderByRelevanceInputSchema } from './DashboardOrderByRelevanceInputSchema';

export const DashboardOrderByWithRelationInputSchema: z.ZodType<Prisma.DashboardOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  doIndex: z.lazy(() => SortOrderSchema).optional(),
  password: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  showConversions: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => LinkOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DashboardOrderByRelevanceInputSchema).optional()
}).strict();

export default DashboardOrderByWithRelationInputSchema;
