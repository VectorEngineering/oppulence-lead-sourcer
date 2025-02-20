import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkUpdateWithoutProgramInviteInputSchema } from './LinkUpdateWithoutProgramInviteInputSchema'
import { LinkUncheckedUpdateWithoutProgramInviteInputSchema } from './LinkUncheckedUpdateWithoutProgramInviteInputSchema'
import { LinkCreateWithoutProgramInviteInputSchema } from './LinkCreateWithoutProgramInviteInputSchema'
import { LinkUncheckedCreateWithoutProgramInviteInputSchema } from './LinkUncheckedCreateWithoutProgramInviteInputSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'

export const LinkUpsertWithoutProgramInviteInputSchema: z.ZodType<Prisma.LinkUpsertWithoutProgramInviteInput> = z
    .object({
        update: z.union([
            z.lazy(() => LinkUpdateWithoutProgramInviteInputSchema),
            z.lazy(() => LinkUncheckedUpdateWithoutProgramInviteInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LinkCreateWithoutProgramInviteInputSchema),
            z.lazy(() => LinkUncheckedCreateWithoutProgramInviteInputSchema)
        ]),
        where: z.lazy(() => LinkWhereInputSchema).optional()
    })
    .strict()

export default LinkUpsertWithoutProgramInviteInputSchema
