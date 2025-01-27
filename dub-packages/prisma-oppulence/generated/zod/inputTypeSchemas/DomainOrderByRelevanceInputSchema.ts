import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainOrderByRelevanceFieldEnumSchema } from './DomainOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DomainOrderByRelevanceInputSchema: z.ZodType<Prisma.DomainOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DomainOrderByRelevanceFieldEnumSchema),z.lazy(() => DomainOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DomainOrderByRelevanceInputSchema;
