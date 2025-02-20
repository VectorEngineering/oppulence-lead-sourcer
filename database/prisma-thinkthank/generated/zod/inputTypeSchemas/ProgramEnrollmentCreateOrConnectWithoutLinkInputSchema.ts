import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentCreateWithoutLinkInputSchema } from './ProgramEnrollmentCreateWithoutLinkInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema'

export const ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateOrConnectWithoutLinkInput> = z
    .object({
        where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramEnrollmentCreateWithoutLinkInputSchema),
            z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema)
        ])
    })
    .strict()

export default ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema
