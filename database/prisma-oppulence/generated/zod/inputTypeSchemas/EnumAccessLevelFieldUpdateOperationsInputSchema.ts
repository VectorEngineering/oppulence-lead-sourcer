import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessLevelSchema } from './AccessLevelSchema'

export const EnumAccessLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAccessLevelFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => AccessLevelSchema).optional()
    })
    .strict()

export default EnumAccessLevelFieldUpdateOperationsInputSchema
