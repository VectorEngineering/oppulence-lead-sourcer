import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentCreateWithoutApplicationInputSchema } from './ProgramEnrollmentCreateWithoutApplicationInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema'

export const ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateOrConnectWithoutApplicationInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProgramEnrollmentCreateWithoutApplicationInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema
