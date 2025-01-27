import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceTypeSchema } from './ComplianceTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumComplianceTypeFilterSchema } from './NestedEnumComplianceTypeFilterSchema';

export const NestedEnumComplianceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumComplianceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ComplianceTypeSchema).optional(),
  in: z.lazy(() => ComplianceTypeSchema).array().optional(),
  notIn: z.lazy(() => ComplianceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ComplianceTypeSchema),z.lazy(() => NestedEnumComplianceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumComplianceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumComplianceTypeFilterSchema).optional()
}).strict();

export default NestedEnumComplianceTypeWithAggregatesFilterSchema;
