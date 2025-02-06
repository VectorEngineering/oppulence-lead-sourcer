import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FilterOperatorSchema } from './FilterOperatorSchema';
import { ReportCreateNestedOneWithoutFiltersInputSchema } from './ReportCreateNestedOneWithoutFiltersInputSchema';

export const ReportFilterCreateInputSchema: z.ZodType<Prisma.ReportFilterCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field: z.string(),
  operator: z.lazy(() => FilterOperatorSchema),
  value: z.string(),
  valueType: z.string(),
  group: z.string().optional().nullable(),
  position: z.number().int(),
  report: z.lazy(() => ReportCreateNestedOneWithoutFiltersInputSchema)
}).strict();

export default ReportFilterCreateInputSchema;
