import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';

export const NestedEnumComplianceStatusNullableFilterSchema: z.ZodType<Prisma.NestedEnumComplianceStatusNullableFilter> = z.object({
  equals: z.lazy(() => ComplianceStatusSchema).optional().nullable(),
  in: z.lazy(() => ComplianceStatusSchema).array().optional().nullable(),
  notIn: z.lazy(() => ComplianceStatusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => ComplianceStatusSchema),z.lazy(() => NestedEnumComplianceStatusNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumComplianceStatusNullableFilterSchema;
