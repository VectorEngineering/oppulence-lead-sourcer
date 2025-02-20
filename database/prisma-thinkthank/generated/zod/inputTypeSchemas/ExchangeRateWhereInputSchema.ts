import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const ExchangeRateWhereInputSchema: z.ZodType<Prisma.ExchangeRateWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ExchangeRateWhereInputSchema), z.lazy(() => ExchangeRateWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ExchangeRateWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ExchangeRateWhereInputSchema), z.lazy(() => ExchangeRateWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        baseCurrency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        targetCurrency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        rate: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ExchangeRateWhereInputSchema
