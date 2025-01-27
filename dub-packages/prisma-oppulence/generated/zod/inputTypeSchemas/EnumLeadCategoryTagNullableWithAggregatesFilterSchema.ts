import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema';
import { NestedEnumLeadCategoryTagNullableWithAggregatesFilterSchema } from './NestedEnumLeadCategoryTagNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumLeadCategoryTagNullableFilterSchema } from './NestedEnumLeadCategoryTagNullableFilterSchema';

export const EnumLeadCategoryTagNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadCategoryTagNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LeadCategoryTagSchema).optional().nullable(),
  in: z.lazy(() => LeadCategoryTagSchema).array().optional().nullable(),
  notIn: z.lazy(() => LeadCategoryTagSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => LeadCategoryTagSchema),z.lazy(() => NestedEnumLeadCategoryTagNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLeadCategoryTagNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLeadCategoryTagNullableFilterSchema).optional()
}).strict();

export default EnumLeadCategoryTagNullableWithAggregatesFilterSchema;
