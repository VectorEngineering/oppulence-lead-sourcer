import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RiskLevelSchema } from './RiskLevelSchema'

export const NullableEnumRiskLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumRiskLevelFieldUpdateOperationsInput> = z
    .object({
        set: z
            .lazy(() => RiskLevelSchema)
            .optional()
            .nullable()
    })
    .strict()

export default NullableEnumRiskLevelFieldUpdateOperationsInputSchema
