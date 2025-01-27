import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema'

export const EnumProgramEnrollmentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumProgramEnrollmentStatusFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => ProgramEnrollmentStatusSchema).optional()
        })
        .strict()

export default EnumProgramEnrollmentStatusFieldUpdateOperationsInputSchema
