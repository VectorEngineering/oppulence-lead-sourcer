import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractVersionOrderByRelevanceFieldEnumSchema } from './ContractVersionOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractVersionOrderByRelevanceInputSchema: z.ZodType<Prisma.ContractVersionOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ContractVersionOrderByRelevanceFieldEnumSchema),z.lazy(() => ContractVersionOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ContractVersionOrderByRelevanceInputSchema;
