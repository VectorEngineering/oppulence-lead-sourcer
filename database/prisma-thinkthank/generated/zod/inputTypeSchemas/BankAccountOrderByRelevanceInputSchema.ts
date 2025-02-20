import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountOrderByRelevanceFieldEnumSchema } from './BankAccountOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const BankAccountOrderByRelevanceInputSchema: z.ZodType<Prisma.BankAccountOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BankAccountOrderByRelevanceFieldEnumSchema),z.lazy(() => BankAccountOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default BankAccountOrderByRelevanceInputSchema;
