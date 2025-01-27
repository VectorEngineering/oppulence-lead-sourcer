import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TaskPrioritySchema } from './TaskPrioritySchema'

export const EnumTaskPriorityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTaskPriorityFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => TaskPrioritySchema).optional()
    })
    .strict()

export default EnumTaskPriorityFieldUpdateOperationsInputSchema
