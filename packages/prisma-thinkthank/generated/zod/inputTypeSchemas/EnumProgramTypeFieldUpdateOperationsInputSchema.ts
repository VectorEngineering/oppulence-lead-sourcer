import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramTypeSchema } from './ProgramTypeSchema'

export const EnumProgramTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumProgramTypeFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => ProgramTypeSchema).optional()
    })
    .strict()

export default EnumProgramTypeFieldUpdateOperationsInputSchema
