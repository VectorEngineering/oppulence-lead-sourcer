import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterOrderByRelevanceFieldEnumSchema } from './ReportFilterOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportFilterOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportFilterOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ReportFilterOrderByRelevanceFieldEnumSchema),z.lazy(() => ReportFilterOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ReportFilterOrderByRelevanceInputSchema;
