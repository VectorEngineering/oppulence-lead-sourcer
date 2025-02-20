import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramEnrollmentSelectSchema } from '../inputTypeSchemas/ProgramEnrollmentSelectSchema'
import { ProgramEnrollmentIncludeSchema } from '../inputTypeSchemas/ProgramEnrollmentIncludeSchema'

export const ProgramEnrollmentArgsSchema: z.ZodType<Prisma.ProgramEnrollmentDefaultArgs> = z
    .object({
        select: z.lazy(() => ProgramEnrollmentSelectSchema).optional(),
        include: z.lazy(() => ProgramEnrollmentIncludeSchema).optional()
    })
    .strict()

export default ProgramEnrollmentArgsSchema
