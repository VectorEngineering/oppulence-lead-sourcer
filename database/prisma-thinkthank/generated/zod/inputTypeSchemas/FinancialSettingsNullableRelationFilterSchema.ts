import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FinancialSettingsWhereInputSchema } from './FinancialSettingsWhereInputSchema'

export const FinancialSettingsNullableRelationFilterSchema: z.ZodType<Prisma.FinancialSettingsNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => FinancialSettingsWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => FinancialSettingsWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default FinancialSettingsNullableRelationFilterSchema
