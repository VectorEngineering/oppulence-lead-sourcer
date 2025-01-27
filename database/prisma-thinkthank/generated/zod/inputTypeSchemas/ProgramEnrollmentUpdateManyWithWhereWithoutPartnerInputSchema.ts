import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentScalarWhereInputSchema } from './ProgramEnrollmentScalarWhereInputSchema'
import { ProgramEnrollmentUpdateManyMutationInputSchema } from './ProgramEnrollmentUpdateManyMutationInputSchema'
import { ProgramEnrollmentUncheckedUpdateManyWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedUpdateManyWithoutPartnerInputSchema'

export const ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProgramEnrollmentUpdateManyMutationInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedUpdateManyWithoutPartnerInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInputSchema
