import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReportOrderByWithRelationInputSchema } from './ReportOrderByWithRelationInputSchema';
import { ReportFilterOrderByRelevanceInputSchema } from './ReportFilterOrderByRelevanceInputSchema';

export const ReportFilterOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportFilterOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  operator: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  valueType: z.lazy(() => SortOrderSchema).optional(),
  group: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ReportFilterOrderByRelevanceInputSchema).optional()
}).strict();

export default ReportFilterOrderByWithRelationInputSchema;
