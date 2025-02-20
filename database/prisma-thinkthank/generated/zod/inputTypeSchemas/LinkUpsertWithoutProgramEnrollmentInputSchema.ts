import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkUpdateWithoutProgramEnrollmentInputSchema } from './LinkUpdateWithoutProgramEnrollmentInputSchema'
import { LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema'
import { LinkCreateWithoutProgramEnrollmentInputSchema } from './LinkCreateWithoutProgramEnrollmentInputSchema'
import { LinkUncheckedCreateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedCreateWithoutProgramEnrollmentInputSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'

export const LinkUpsertWithoutProgramEnrollmentInputSchema: z.ZodType<Prisma.LinkUpsertWithoutProgramEnrollmentInput> = z
    .object({
        update: z.union([
            z.lazy(() => LinkUpdateWithoutProgramEnrollmentInputSchema),
            z.lazy(() => LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LinkCreateWithoutProgramEnrollmentInputSchema),
            z.lazy(() => LinkUncheckedCreateWithoutProgramEnrollmentInputSchema)
        ]),
        where: z.lazy(() => LinkWhereInputSchema).optional()
    })
    .strict()

export default LinkUpsertWithoutProgramEnrollmentInputSchema
