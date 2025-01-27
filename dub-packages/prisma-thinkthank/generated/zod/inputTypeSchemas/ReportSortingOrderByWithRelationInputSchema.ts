import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReportOrderByWithRelationInputSchema } from './ReportOrderByWithRelationInputSchema';
import { ReportSortingOrderByRelevanceInputSchema } from './ReportSortingOrderByRelevanceInputSchema';

export const ReportSortingOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportSortingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  direction: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ReportSortingOrderByRelevanceInputSchema).optional()
}).strict();

export default ReportSortingOrderByWithRelationInputSchema;
