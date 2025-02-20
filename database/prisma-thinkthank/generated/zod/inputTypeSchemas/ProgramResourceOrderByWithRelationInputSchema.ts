import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { ProgramResourceOrderByRelevanceInputSchema } from './ProgramResourceOrderByRelevanceInputSchema';

export const ProgramResourceOrderByWithRelationInputSchema: z.ZodType<Prisma.ProgramResourceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  size: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ProgramResourceOrderByRelevanceInputSchema).optional()
}).strict();

export default ProgramResourceOrderByWithRelationInputSchema;
