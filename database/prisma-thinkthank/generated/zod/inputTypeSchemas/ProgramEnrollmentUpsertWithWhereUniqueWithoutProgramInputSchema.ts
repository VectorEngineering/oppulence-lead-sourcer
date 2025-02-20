import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentUpdateWithoutProgramInputSchema } from './ProgramEnrollmentUpdateWithoutProgramInputSchema'
import { ProgramEnrollmentUncheckedUpdateWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutProgramInputSchema'
import { ProgramEnrollmentCreateWithoutProgramInputSchema } from './ProgramEnrollmentCreateWithoutProgramInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema'

export const ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ProgramEnrollmentUpdateWithoutProgramInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutProgramInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ProgramEnrollmentCreateWithoutProgramInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentUpsertWithWhereUniqueWithoutProgramInputSchema
