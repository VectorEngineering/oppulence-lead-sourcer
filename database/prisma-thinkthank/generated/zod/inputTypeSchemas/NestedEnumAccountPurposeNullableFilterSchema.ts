import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountPurposeSchema } from './AccountPurposeSchema'

export const NestedEnumAccountPurposeNullableFilterSchema: z.ZodType<Prisma.NestedEnumAccountPurposeNullableFilter> = z
    .object({
        equals: z
            .lazy(() => AccountPurposeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => AccountPurposeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => AccountPurposeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => AccountPurposeSchema), z.lazy(() => NestedEnumAccountPurposeNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumAccountPurposeNullableFilterSchema
