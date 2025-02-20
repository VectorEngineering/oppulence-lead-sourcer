import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProgramInviteUncheckedCreateWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteUncheckedCreateWithoutLinkInput> = z
    .object({
        id: z.string().cuid().optional(),
        programId: z.string(),
        email: z.string(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default ProgramInviteUncheckedCreateWithoutLinkInputSchema
