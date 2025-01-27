import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ComplianceTypeSchema } from './ComplianceTypeSchema';
import { NestedEnumComplianceTypeFilterSchema } from './NestedEnumComplianceTypeFilterSchema';

export const EnumComplianceTypeFilterSchema: z.ZodType<Prisma.EnumComplianceTypeFilter> = z.object({
  equals: z.lazy(() => ComplianceTypeSchema).optional(),
  in: z.lazy(() => ComplianceTypeSchema).array().optional(),
  notIn: z.lazy(() => ComplianceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ComplianceTypeSchema),z.lazy(() => NestedEnumComplianceTypeFilterSchema) ]).optional(),
}).strict();

export default EnumComplianceTypeFilterSchema;
