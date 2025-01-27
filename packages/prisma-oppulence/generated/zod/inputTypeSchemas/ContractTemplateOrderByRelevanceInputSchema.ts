import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractTemplateOrderByRelevanceFieldEnumSchema } from './ContractTemplateOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractTemplateOrderByRelevanceInputSchema: z.ZodType<Prisma.ContractTemplateOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ContractTemplateOrderByRelevanceFieldEnumSchema),z.lazy(() => ContractTemplateOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ContractTemplateOrderByRelevanceInputSchema;
