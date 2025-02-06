import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionReconciliationMatchOrderByRelevanceFieldEnumSchema } from './TransactionReconciliationMatchOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionReconciliationMatchOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TransactionReconciliationMatchOrderByRelevanceFieldEnumSchema),z.lazy(() => TransactionReconciliationMatchOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TransactionReconciliationMatchOrderByRelevanceInputSchema;
