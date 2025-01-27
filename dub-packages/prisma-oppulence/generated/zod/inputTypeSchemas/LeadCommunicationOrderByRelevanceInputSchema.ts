import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommunicationOrderByRelevanceFieldEnumSchema } from './LeadCommunicationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCommunicationOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCommunicationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadCommunicationOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadCommunicationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadCommunicationOrderByRelevanceInputSchema;
