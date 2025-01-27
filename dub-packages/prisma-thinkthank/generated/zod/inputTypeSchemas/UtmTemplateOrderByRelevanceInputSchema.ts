import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateOrderByRelevanceFieldEnumSchema } from './UtmTemplateOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const UtmTemplateOrderByRelevanceInputSchema: z.ZodType<Prisma.UtmTemplateOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UtmTemplateOrderByRelevanceFieldEnumSchema),z.lazy(() => UtmTemplateOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default UtmTemplateOrderByRelevanceInputSchema;
