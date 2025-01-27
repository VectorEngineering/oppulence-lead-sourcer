import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationOrderByRelevanceFieldEnumSchema } from './IntegrationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const IntegrationOrderByRelevanceInputSchema: z.ZodType<Prisma.IntegrationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => IntegrationOrderByRelevanceFieldEnumSchema),z.lazy(() => IntegrationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default IntegrationOrderByRelevanceInputSchema;
