import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractOrderByRelevanceFieldEnumSchema } from './ContractOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractOrderByRelevanceInputSchema: z.ZodType<Prisma.ContractOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ContractOrderByRelevanceFieldEnumSchema),z.lazy(() => ContractOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ContractOrderByRelevanceInputSchema;
