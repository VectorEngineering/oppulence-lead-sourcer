import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProgramInviteUncheckedCreateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteUncheckedCreateWithoutProgramInput> = z
    .object({
        id: z.string().cuid().optional(),
        email: z.string(),
        linkId: z.string(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default ProgramInviteUncheckedCreateWithoutProgramInputSchema
