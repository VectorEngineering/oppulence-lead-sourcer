import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemOrderByRelevanceFieldEnumSchema } from './LeadExternalSystemOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadExternalSystemOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadExternalSystemOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadExternalSystemOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadExternalSystemOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadExternalSystemOrderByRelevanceInputSchema;
