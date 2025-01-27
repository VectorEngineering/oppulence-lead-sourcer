import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorOrderByRelevanceFieldEnumSchema } from './DealCompetitorOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DealCompetitorOrderByRelevanceInputSchema: z.ZodType<Prisma.DealCompetitorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DealCompetitorOrderByRelevanceFieldEnumSchema),z.lazy(() => DealCompetitorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DealCompetitorOrderByRelevanceInputSchema;
