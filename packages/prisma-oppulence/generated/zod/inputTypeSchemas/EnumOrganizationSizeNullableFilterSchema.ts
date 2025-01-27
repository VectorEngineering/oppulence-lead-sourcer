import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationSizeSchema } from './OrganizationSizeSchema';
import { NestedEnumOrganizationSizeNullableFilterSchema } from './NestedEnumOrganizationSizeNullableFilterSchema';

export const EnumOrganizationSizeNullableFilterSchema: z.ZodType<Prisma.EnumOrganizationSizeNullableFilter> = z.object({
  equals: z.lazy(() => OrganizationSizeSchema).optional().nullable(),
  in: z.lazy(() => OrganizationSizeSchema).array().optional().nullable(),
  notIn: z.lazy(() => OrganizationSizeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => OrganizationSizeSchema),z.lazy(() => NestedEnumOrganizationSizeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumOrganizationSizeNullableFilterSchema;
