import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentOrderByRelevanceFieldEnumSchema } from './ContractDocumentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractDocumentOrderByRelevanceInputSchema: z.ZodType<Prisma.ContractDocumentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ContractDocumentOrderByRelevanceFieldEnumSchema),z.lazy(() => ContractDocumentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ContractDocumentOrderByRelevanceInputSchema;
