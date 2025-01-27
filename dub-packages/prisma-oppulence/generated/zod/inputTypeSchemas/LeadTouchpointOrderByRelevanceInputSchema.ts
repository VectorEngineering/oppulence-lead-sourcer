import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointOrderByRelevanceFieldEnumSchema } from './LeadTouchpointOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadTouchpointOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadTouchpointOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadTouchpointOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadTouchpointOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadTouchpointOrderByRelevanceInputSchema;
