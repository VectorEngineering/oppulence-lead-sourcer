import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteUpdateWithoutLinkInputSchema } from './ProgramInviteUpdateWithoutLinkInputSchema'
import { ProgramInviteUncheckedUpdateWithoutLinkInputSchema } from './ProgramInviteUncheckedUpdateWithoutLinkInputSchema'
import { ProgramInviteCreateWithoutLinkInputSchema } from './ProgramInviteCreateWithoutLinkInputSchema'
import { ProgramInviteUncheckedCreateWithoutLinkInputSchema } from './ProgramInviteUncheckedCreateWithoutLinkInputSchema'
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema'

export const ProgramInviteUpsertWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteUpsertWithoutLinkInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramInviteUpdateWithoutLinkInputSchema),
            z.lazy(() => ProgramInviteUncheckedUpdateWithoutLinkInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramInviteCreateWithoutLinkInputSchema),
            z.lazy(() => ProgramInviteUncheckedCreateWithoutLinkInputSchema)
        ]),
        where: z.lazy(() => ProgramInviteWhereInputSchema).optional()
    })
    .strict()

export default ProgramInviteUpsertWithoutLinkInputSchema
