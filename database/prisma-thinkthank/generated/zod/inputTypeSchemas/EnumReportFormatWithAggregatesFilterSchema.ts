import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFormatSchema } from './ReportFormatSchema';
import { NestedEnumReportFormatWithAggregatesFilterSchema } from './NestedEnumReportFormatWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumReportFormatFilterSchema } from './NestedEnumReportFormatFilterSchema';

export const EnumReportFormatWithAggregatesFilterSchema: z.ZodType<Prisma.EnumReportFormatWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ReportFormatSchema).optional(),
  in: z.lazy(() => ReportFormatSchema).array().optional(),
  notIn: z.lazy(() => ReportFormatSchema).array().optional(),
  not: z.union([ z.lazy(() => ReportFormatSchema),z.lazy(() => NestedEnumReportFormatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumReportFormatFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumReportFormatFilterSchema).optional()
}).strict();

export default EnumReportFormatWithAggregatesFilterSchema;
