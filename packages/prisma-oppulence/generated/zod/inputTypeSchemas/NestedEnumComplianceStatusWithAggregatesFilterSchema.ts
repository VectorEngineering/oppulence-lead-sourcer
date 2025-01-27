import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumComplianceStatusFilterSchema } from './NestedEnumComplianceStatusFilterSchema';

export const NestedEnumComplianceStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumComplianceStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ComplianceStatusSchema).optional(),
  in: z.lazy(() => ComplianceStatusSchema).array().optional(),
  notIn: z.lazy(() => ComplianceStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ComplianceStatusSchema),z.lazy(() => NestedEnumComplianceStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumComplianceStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumComplianceStatusFilterSchema).optional()
}).strict();

export default NestedEnumComplianceStatusWithAggregatesFilterSchema;
