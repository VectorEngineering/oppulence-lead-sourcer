import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'
import { NestedEnumOrganizationSizeNullableWithAggregatesFilterSchema } from './NestedEnumOrganizationSizeNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumOrganizationSizeNullableFilterSchema } from './NestedEnumOrganizationSizeNullableFilterSchema'

export const EnumOrganizationSizeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOrganizationSizeNullableWithAggregatesFilter> = z
    .object({
        equals: z
            .lazy(() => OrganizationSizeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => OrganizationSizeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => OrganizationSizeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => OrganizationSizeSchema), z.lazy(() => NestedEnumOrganizationSizeNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumOrganizationSizeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumOrganizationSizeNullableFilterSchema).optional()
    })
    .strict()

export default EnumOrganizationSizeNullableWithAggregatesFilterSchema
