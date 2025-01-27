import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumComplianceStatusNullableFilterSchema } from './NestedEnumComplianceStatusNullableFilterSchema';

export const NestedEnumComplianceStatusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumComplianceStatusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ComplianceStatusSchema).optional().nullable(),
  in: z.lazy(() => ComplianceStatusSchema).array().optional().nullable(),
  notIn: z.lazy(() => ComplianceStatusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => ComplianceStatusSchema),z.lazy(() => NestedEnumComplianceStatusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumComplianceStatusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumComplianceStatusNullableFilterSchema).optional()
}).strict();

export default NestedEnumComplianceStatusNullableWithAggregatesFilterSchema;
