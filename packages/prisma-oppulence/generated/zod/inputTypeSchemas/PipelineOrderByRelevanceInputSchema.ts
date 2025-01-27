import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineOrderByRelevanceFieldEnumSchema } from './PipelineOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineOrderByRelevanceInputSchema: z.ZodType<Prisma.PipelineOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => PipelineOrderByRelevanceFieldEnumSchema),z.lazy(() => PipelineOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default PipelineOrderByRelevanceInputSchema;
