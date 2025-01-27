import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const FinancialSettingsIncludeSchema: z.ZodType<Prisma.FinancialSettingsInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export default FinancialSettingsIncludeSchema
