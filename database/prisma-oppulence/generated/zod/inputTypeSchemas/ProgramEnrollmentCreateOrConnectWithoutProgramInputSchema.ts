import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentCreateWithoutProgramInputSchema } from './ProgramEnrollmentCreateWithoutProgramInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema'

export const ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateOrConnectWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProgramEnrollmentCreateWithoutProgramInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema
