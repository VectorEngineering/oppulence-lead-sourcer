import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountSubTypeSchema } from './AccountSubTypeSchema'

export const NestedEnumAccountSubTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumAccountSubTypeNullableFilter> = z
    .object({
        equals: z
            .lazy(() => AccountSubTypeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => AccountSubTypeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => AccountSubTypeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => AccountSubTypeSchema), z.lazy(() => NestedEnumAccountSubTypeNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumAccountSubTypeNullableFilterSchema
