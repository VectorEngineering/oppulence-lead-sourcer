import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingOrderByRelevanceFieldEnumSchema } from './ReportSortingOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportSortingOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportSortingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ReportSortingOrderByRelevanceFieldEnumSchema),z.lazy(() => ReportSortingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ReportSortingOrderByRelevanceInputSchema;
