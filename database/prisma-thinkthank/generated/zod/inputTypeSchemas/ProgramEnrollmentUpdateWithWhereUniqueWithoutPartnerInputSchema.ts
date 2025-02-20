import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentUpdateWithoutPartnerInputSchema } from './ProgramEnrollmentUpdateWithoutPartnerInputSchema'
import { ProgramEnrollmentUncheckedUpdateWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutPartnerInputSchema'

export const ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ProgramEnrollmentUpdateWithoutPartnerInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInputSchema
