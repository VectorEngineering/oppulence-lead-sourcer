import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminRoleSchema } from './AdminRoleSchema';
import { NestedEnumAdminRoleNullableFilterSchema } from './NestedEnumAdminRoleNullableFilterSchema';

export const EnumAdminRoleNullableFilterSchema: z.ZodType<Prisma.EnumAdminRoleNullableFilter> = z.object({
  equals: z.lazy(() => AdminRoleSchema).optional().nullable(),
  in: z.lazy(() => AdminRoleSchema).array().optional().nullable(),
  notIn: z.lazy(() => AdminRoleSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => AdminRoleSchema),z.lazy(() => NestedEnumAdminRoleNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumAdminRoleNullableFilterSchema;
