import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentCreateWithoutPartnerInputSchema } from './ProgramEnrollmentCreateWithoutPartnerInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema'

export const ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateOrConnectWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProgramEnrollmentCreateWithoutPartnerInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema
