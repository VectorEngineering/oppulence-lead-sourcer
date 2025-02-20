import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankProviderSchema } from './BankProviderSchema'

export const NestedEnumBankProviderNullableFilterSchema: z.ZodType<Prisma.NestedEnumBankProviderNullableFilter> = z
    .object({
        equals: z
            .lazy(() => BankProviderSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => BankProviderSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => BankProviderSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => BankProviderSchema), z.lazy(() => NestedEnumBankProviderNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumBankProviderNullableFilterSchema
