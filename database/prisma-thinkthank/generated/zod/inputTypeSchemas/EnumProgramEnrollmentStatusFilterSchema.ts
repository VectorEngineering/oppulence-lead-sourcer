import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema'
import { NestedEnumProgramEnrollmentStatusFilterSchema } from './NestedEnumProgramEnrollmentStatusFilterSchema'

export const EnumProgramEnrollmentStatusFilterSchema: z.ZodType<Prisma.EnumProgramEnrollmentStatusFilter> = z
    .object({
        equals: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
        in: z
            .lazy(() => ProgramEnrollmentStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ProgramEnrollmentStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => ProgramEnrollmentStatusSchema), z.lazy(() => NestedEnumProgramEnrollmentStatusFilterSchema)]).optional()
    })
    .strict()

export default EnumProgramEnrollmentStatusFilterSchema
