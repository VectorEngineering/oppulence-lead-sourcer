import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { KpiTypeSchema } from './KpiTypeSchema'

export const EnumKpiTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumKpiTypeFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => KpiTypeSchema).optional()
    })
    .strict()

export default EnumKpiTypeFieldUpdateOperationsInputSchema
