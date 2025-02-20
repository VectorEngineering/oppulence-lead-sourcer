import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumFilterOperatorFilterSchema } from './EnumFilterOperatorFilterSchema';
import { FilterOperatorSchema } from './FilterOperatorSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportFilterWhereInputSchema: z.ZodType<Prisma.ReportFilterWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReportFilterWhereInputSchema),z.lazy(() => ReportFilterWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportFilterWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportFilterWhereInputSchema),z.lazy(() => ReportFilterWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reportId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  operator: z.union([ z.lazy(() => EnumFilterOperatorFilterSchema),z.lazy(() => FilterOperatorSchema) ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  valueType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  report: z.union([ z.lazy(() => ReportRelationFilterSchema),z.lazy(() => ReportWhereInputSchema) ]).optional(),
}).strict();

export default ReportFilterWhereInputSchema;
