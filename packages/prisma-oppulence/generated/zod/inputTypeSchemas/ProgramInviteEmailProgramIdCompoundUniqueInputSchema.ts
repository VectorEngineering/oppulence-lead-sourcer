import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProgramInviteEmailProgramIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProgramInviteEmailProgramIdCompoundUniqueInput> = z
    .object({
        email: z.string(),
        programId: z.string()
    })
    .strict()

export default ProgramInviteEmailProgramIdCompoundUniqueInputSchema
