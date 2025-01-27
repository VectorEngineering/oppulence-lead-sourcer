import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FilterOperatorSchema } from './FilterOperatorSchema'

export const EnumFilterOperatorFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFilterOperatorFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => FilterOperatorSchema).optional()
    })
    .strict()

export default EnumFilterOperatorFieldUpdateOperationsInputSchema
