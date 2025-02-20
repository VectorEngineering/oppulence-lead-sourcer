import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LinkOrderByWithRelationInputSchema } from './LinkOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';
import { LinkTagOrderByRelevanceInputSchema } from './LinkTagOrderByRelevanceInputSchema';

export const LinkTagOrderByWithRelationInputSchema: z.ZodType<Prisma.LinkTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => LinkOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LinkTagOrderByRelevanceInputSchema).optional()
}).strict();

export default LinkTagOrderByWithRelationInputSchema;
