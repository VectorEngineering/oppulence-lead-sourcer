import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentScalarWhereInputSchema } from './ProgramEnrollmentScalarWhereInputSchema'
import { ProgramEnrollmentUpdateManyMutationInputSchema } from './ProgramEnrollmentUpdateManyMutationInputSchema'
import { ProgramEnrollmentUncheckedUpdateManyWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedUpdateManyWithoutProgramInputSchema'

export const ProgramEnrollmentUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateManyWithWhereWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProgramEnrollmentUpdateManyMutationInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedUpdateManyWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentUpdateManyWithWhereWithoutProgramInputSchema
