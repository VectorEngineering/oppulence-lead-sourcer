import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FilterOperatorSchema } from './FilterOperatorSchema';

export const ReportFilterUncheckedCreateInputSchema: z.ZodType<Prisma.ReportFilterUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  reportId: z.string(),
  field: z.string(),
  operator: z.lazy(() => FilterOperatorSchema),
  value: z.string(),
  valueType: z.string(),
  group: z.string().optional().nullable(),
  position: z.number().int()
}).strict();

export default ReportFilterUncheckedCreateInputSchema;
