import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { LinkUpdateWithoutProgramEnrollmentInputSchema } from './LinkUpdateWithoutProgramEnrollmentInputSchema'
import { LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema'

export const LinkUpdateToOneWithWhereWithoutProgramEnrollmentInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutProgramEnrollmentInput> =
    z
        .object({
            where: z.lazy(() => LinkWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LinkUpdateWithoutProgramEnrollmentInputSchema),
                z.lazy(() => LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema)
            ])
        })
        .strict()

export default LinkUpdateToOneWithWhereWithoutProgramEnrollmentInputSchema
