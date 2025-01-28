import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointOrderByRelevanceFieldEnumSchema } from './EndpointOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const EndpointOrderByRelevanceInputSchema: z.ZodType<Prisma.EndpointOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => EndpointOrderByRelevanceFieldEnumSchema),z.lazy(() => EndpointOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default EndpointOrderByRelevanceInputSchema;
