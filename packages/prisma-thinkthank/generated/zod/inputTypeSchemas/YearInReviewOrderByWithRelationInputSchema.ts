import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { YearInReviewOrderByRelevanceInputSchema } from './YearInReviewOrderByRelevanceInputSchema';

export const YearInReviewOrderByWithRelationInputSchema: z.ZodType<Prisma.YearInReviewOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  totalLinks: z.lazy(() => SortOrderSchema).optional(),
  totalClicks: z.lazy(() => SortOrderSchema).optional(),
  topLinks: z.lazy(() => SortOrderSchema).optional(),
  topCountries: z.lazy(() => SortOrderSchema).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  sentAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  workspace: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => YearInReviewOrderByRelevanceInputSchema).optional()
}).strict();

export default YearInReviewOrderByWithRelationInputSchema;
