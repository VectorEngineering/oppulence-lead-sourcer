import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutProgramEnrollmentInputSchema } from './LinkCreateWithoutProgramEnrollmentInputSchema'
import { LinkUncheckedCreateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedCreateWithoutProgramEnrollmentInputSchema'
import { LinkCreateOrConnectWithoutProgramEnrollmentInputSchema } from './LinkCreateOrConnectWithoutProgramEnrollmentInputSchema'
import { LinkUpsertWithoutProgramEnrollmentInputSchema } from './LinkUpsertWithoutProgramEnrollmentInputSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateToOneWithWhereWithoutProgramEnrollmentInputSchema } from './LinkUpdateToOneWithWhereWithoutProgramEnrollmentInputSchema'
import { LinkUpdateWithoutProgramEnrollmentInputSchema } from './LinkUpdateWithoutProgramEnrollmentInputSchema'
import { LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema'

export const LinkUpdateOneWithoutProgramEnrollmentNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneWithoutProgramEnrollmentNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkCreateWithoutProgramEnrollmentInputSchema),
                z.lazy(() => LinkUncheckedCreateWithoutProgramEnrollmentInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutProgramEnrollmentInputSchema).optional(),
        upsert: z.lazy(() => LinkUpsertWithoutProgramEnrollmentInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => LinkWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => LinkWhereInputSchema)]).optional(),
        connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LinkUpdateToOneWithWhereWithoutProgramEnrollmentInputSchema),
                z.lazy(() => LinkUpdateWithoutProgramEnrollmentInputSchema),
                z.lazy(() => LinkUncheckedUpdateWithoutProgramEnrollmentInputSchema)
            ])
            .optional()
    })
    .strict()

export default LinkUpdateOneWithoutProgramEnrollmentNestedInputSchema
