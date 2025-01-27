import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankProviderSchema } from './BankProviderSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumBankProviderNullableFilterSchema } from './NestedEnumBankProviderNullableFilterSchema'

export const NestedEnumBankProviderNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBankProviderNullableWithAggregatesFilter> =
    z
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
                .union([z.lazy(() => BankProviderSchema), z.lazy(() => NestedEnumBankProviderNullableWithAggregatesFilterSchema)])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumBankProviderNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumBankProviderNullableFilterSchema).optional()
        })
        .strict()

export default NestedEnumBankProviderNullableWithAggregatesFilterSchema
