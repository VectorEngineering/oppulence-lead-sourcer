import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema'
import { ProgramInviteCreateWithoutLinkInputSchema } from './ProgramInviteCreateWithoutLinkInputSchema'
import { ProgramInviteUncheckedCreateWithoutLinkInputSchema } from './ProgramInviteUncheckedCreateWithoutLinkInputSchema'

export const ProgramInviteCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteCreateOrConnectWithoutLinkInput> = z
    .object({
        where: z.lazy(() => ProgramInviteWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramInviteCreateWithoutLinkInputSchema),
            z.lazy(() => ProgramInviteUncheckedCreateWithoutLinkInputSchema)
        ])
    })
    .strict()

export default ProgramInviteCreateOrConnectWithoutLinkInputSchema
