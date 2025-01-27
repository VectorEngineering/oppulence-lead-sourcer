import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineIntegrationOrderByRelevanceFieldEnumSchema } from './PipelineIntegrationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PipelineIntegrationOrderByRelevanceInputSchema: z.ZodType<Prisma.PipelineIntegrationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => PipelineIntegrationOrderByRelevanceFieldEnumSchema),z.lazy(() => PipelineIntegrationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default PipelineIntegrationOrderByRelevanceInputSchema;
