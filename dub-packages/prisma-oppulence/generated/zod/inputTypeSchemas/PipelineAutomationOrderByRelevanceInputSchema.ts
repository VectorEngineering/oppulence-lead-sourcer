import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationOrderByRelevanceFieldEnumSchema } from './PipelineAutomationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineAutomationOrderByRelevanceInputSchema: z.ZodType<Prisma.PipelineAutomationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => PipelineAutomationOrderByRelevanceFieldEnumSchema),z.lazy(() => PipelineAutomationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default PipelineAutomationOrderByRelevanceInputSchema;
