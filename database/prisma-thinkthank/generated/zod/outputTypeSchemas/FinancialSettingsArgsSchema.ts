import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { FinancialSettingsSelectSchema } from '../inputTypeSchemas/FinancialSettingsSelectSchema'
import { FinancialSettingsIncludeSchema } from '../inputTypeSchemas/FinancialSettingsIncludeSchema'

export const FinancialSettingsArgsSchema: z.ZodType<Prisma.FinancialSettingsDefaultArgs> = z
    .object({
        select: z.lazy(() => FinancialSettingsSelectSchema).optional(),
        include: z.lazy(() => FinancialSettingsIncludeSchema).optional()
    })
    .strict()

export default FinancialSettingsArgsSchema
