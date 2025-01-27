import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema'
import { ProgramInviteUpdateWithoutProgramInputSchema } from './ProgramInviteUpdateWithoutProgramInputSchema'
import { ProgramInviteUncheckedUpdateWithoutProgramInputSchema } from './ProgramInviteUncheckedUpdateWithoutProgramInputSchema'

export const ProgramInviteUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteUpdateWithWhereUniqueWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramInviteWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ProgramInviteUpdateWithoutProgramInputSchema),
                z.lazy(() => ProgramInviteUncheckedUpdateWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramInviteUpdateWithWhereUniqueWithoutProgramInputSchema
