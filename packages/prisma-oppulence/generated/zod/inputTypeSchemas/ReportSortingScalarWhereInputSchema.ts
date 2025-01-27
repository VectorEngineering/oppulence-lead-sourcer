import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumSortDirectionFilterSchema } from './EnumSortDirectionFilterSchema';
import { SortDirectionSchema } from './SortDirectionSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const ReportSortingScalarWhereInputSchema: z.ZodType<Prisma.ReportSortingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReportSortingScalarWhereInputSchema),z.lazy(() => ReportSortingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportSortingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportSortingScalarWhereInputSchema),z.lazy(() => ReportSortingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reportId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  direction: z.union([ z.lazy(() => EnumSortDirectionFilterSchema),z.lazy(() => SortDirectionSchema) ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ReportSortingScalarWhereInputSchema;
