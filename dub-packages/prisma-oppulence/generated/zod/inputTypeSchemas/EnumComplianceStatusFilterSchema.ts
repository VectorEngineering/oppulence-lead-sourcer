import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { NestedEnumComplianceStatusFilterSchema } from './NestedEnumComplianceStatusFilterSchema';

export const EnumComplianceStatusFilterSchema: z.ZodType<Prisma.EnumComplianceStatusFilter> = z.object({
  equals: z.lazy(() => ComplianceStatusSchema).optional(),
  in: z.lazy(() => ComplianceStatusSchema).array().optional(),
  notIn: z.lazy(() => ComplianceStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ComplianceStatusSchema),z.lazy(() => NestedEnumComplianceStatusFilterSchema) ]).optional(),
}).strict();

export default EnumComplianceStatusFilterSchema;
