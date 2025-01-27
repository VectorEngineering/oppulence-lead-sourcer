import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'

export const NestedEnumOrganizationSizeNullableFilterSchema: z.ZodType<Prisma.NestedEnumOrganizationSizeNullableFilter> = z
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
            .union([z.lazy(() => OrganizationSizeSchema), z.lazy(() => NestedEnumOrganizationSizeNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumOrganizationSizeNullableFilterSchema
