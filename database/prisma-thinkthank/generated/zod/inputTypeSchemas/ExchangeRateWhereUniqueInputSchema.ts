import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ExchangeRateWhereInputSchema } from './ExchangeRateWhereInputSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const ExchangeRateWhereUniqueInputSchema: z.ZodType<Prisma.ExchangeRateWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z.union([z.lazy(() => ExchangeRateWhereInputSchema), z.lazy(() => ExchangeRateWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => ExchangeRateWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => ExchangeRateWhereInputSchema), z.lazy(() => ExchangeRateWhereInputSchema).array()]).optional(),
                baseCurrency: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                targetCurrency: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                rate: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
            })
            .strict()
    )

export default ExchangeRateWhereUniqueInputSchema
