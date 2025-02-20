import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PlanSchema } from './PlanSchema'

export const NullableEnumPlanFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumPlanFieldUpdateOperationsInput> = z
    .object({
        set: z
            .lazy(() => PlanSchema)
            .optional()
            .nullable()
    })
    .strict()

export default NullableEnumPlanFieldUpdateOperationsInputSchema
