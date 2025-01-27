import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceTypeSchema } from './ComplianceTypeSchema';
import { NestedEnumComplianceTypeWithAggregatesFilterSchema } from './NestedEnumComplianceTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumComplianceTypeFilterSchema } from './NestedEnumComplianceTypeFilterSchema';

export const EnumComplianceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumComplianceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ComplianceTypeSchema).optional(),
  in: z.lazy(() => ComplianceTypeSchema).array().optional(),
  notIn: z.lazy(() => ComplianceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ComplianceTypeSchema),z.lazy(() => NestedEnumComplianceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumComplianceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumComplianceTypeFilterSchema).optional()
}).strict();

export default EnumComplianceTypeWithAggregatesFilterSchema;
