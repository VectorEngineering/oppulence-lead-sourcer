import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportOrderByRelevanceFieldEnumSchema } from './ReportOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ReportOrderByRelevanceFieldEnumSchema),z.lazy(() => ReportOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ReportOrderByRelevanceInputSchema;
