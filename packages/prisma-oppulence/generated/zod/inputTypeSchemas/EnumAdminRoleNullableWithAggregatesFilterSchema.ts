import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminRoleSchema } from './AdminRoleSchema';
import { NestedEnumAdminRoleNullableWithAggregatesFilterSchema } from './NestedEnumAdminRoleNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumAdminRoleNullableFilterSchema } from './NestedEnumAdminRoleNullableFilterSchema';

export const EnumAdminRoleNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAdminRoleNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AdminRoleSchema).optional().nullable(),
  in: z.lazy(() => AdminRoleSchema).array().optional().nullable(),
  notIn: z.lazy(() => AdminRoleSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => AdminRoleSchema),z.lazy(() => NestedEnumAdminRoleNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAdminRoleNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAdminRoleNullableFilterSchema).optional()
}).strict();

export default EnumAdminRoleNullableWithAggregatesFilterSchema;
