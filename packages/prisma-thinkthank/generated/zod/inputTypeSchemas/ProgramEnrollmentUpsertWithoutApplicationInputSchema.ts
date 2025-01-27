import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentUpdateWithoutApplicationInputSchema } from './ProgramEnrollmentUpdateWithoutApplicationInputSchema'
import { ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema'
import { ProgramEnrollmentCreateWithoutApplicationInputSchema } from './ProgramEnrollmentCreateWithoutApplicationInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema'
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema'

export const ProgramEnrollmentUpsertWithoutApplicationInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpsertWithoutApplicationInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramEnrollmentUpdateWithoutApplicationInputSchema),
            z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramEnrollmentCreateWithoutApplicationInputSchema),
            z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema)
        ]),
        where: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional()
    })
    .strict()

export default ProgramEnrollmentUpsertWithoutApplicationInputSchema
