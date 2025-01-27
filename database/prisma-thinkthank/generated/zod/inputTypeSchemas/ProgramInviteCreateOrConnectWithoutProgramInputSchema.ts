import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema'
import { ProgramInviteCreateWithoutProgramInputSchema } from './ProgramInviteCreateWithoutProgramInputSchema'
import { ProgramInviteUncheckedCreateWithoutProgramInputSchema } from './ProgramInviteUncheckedCreateWithoutProgramInputSchema'

export const ProgramInviteCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteCreateOrConnectWithoutProgramInput> = z
    .object({
        where: z.lazy(() => ProgramInviteWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramInviteCreateWithoutProgramInputSchema),
            z.lazy(() => ProgramInviteUncheckedCreateWithoutProgramInputSchema)
        ])
    })
    .strict()

export default ProgramInviteCreateOrConnectWithoutProgramInputSchema
