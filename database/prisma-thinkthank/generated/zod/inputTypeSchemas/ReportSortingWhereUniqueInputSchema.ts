import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingWhereInputSchema } from './ReportSortingWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumSortDirectionFilterSchema } from './EnumSortDirectionFilterSchema';
import { SortDirectionSchema } from './SortDirectionSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportSortingWhereUniqueInputSchema: z.ZodType<Prisma.ReportSortingWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ReportSortingWhereInputSchema),z.lazy(() => ReportSortingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportSortingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportSortingWhereInputSchema),z.lazy(() => ReportSortingWhereInputSchema).array() ]).optional(),
  reportId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  direction: z.union([ z.lazy(() => EnumSortDirectionFilterSchema),z.lazy(() => SortDirectionSchema) ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  report: z.union([ z.lazy(() => ReportRelationFilterSchema),z.lazy(() => ReportWhereInputSchema) ]).optional(),
}).strict());

export default ReportSortingWhereUniqueInputSchema;
