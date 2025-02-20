import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentUpdateWithoutLinkInputSchema } from './ProgramEnrollmentUpdateWithoutLinkInputSchema'
import { ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema'
import { ProgramEnrollmentCreateWithoutLinkInputSchema } from './ProgramEnrollmentCreateWithoutLinkInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema'
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema'

export const ProgramEnrollmentUpsertWithoutLinkInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpsertWithoutLinkInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramEnrollmentUpdateWithoutLinkInputSchema),
            z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramEnrollmentCreateWithoutLinkInputSchema),
            z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema)
        ]),
        where: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional()
    })
    .strict()

export default ProgramEnrollmentUpsertWithoutLinkInputSchema
