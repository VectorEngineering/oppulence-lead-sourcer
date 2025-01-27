import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadConsentOrderByRelevanceFieldEnumSchema } from './LeadConsentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadConsentOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadConsentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LeadConsentOrderByRelevanceFieldEnumSchema),z.lazy(() => LeadConsentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LeadConsentOrderByRelevanceInputSchema;
