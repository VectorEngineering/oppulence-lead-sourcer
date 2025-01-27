import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FinancialSettingsOrderByRelevanceFieldEnumSchema } from './FinancialSettingsOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const FinancialSettingsOrderByRelevanceInputSchema: z.ZodType<Prisma.FinancialSettingsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => FinancialSettingsOrderByRelevanceFieldEnumSchema),z.lazy(() => FinancialSettingsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default FinancialSettingsOrderByRelevanceInputSchema;
