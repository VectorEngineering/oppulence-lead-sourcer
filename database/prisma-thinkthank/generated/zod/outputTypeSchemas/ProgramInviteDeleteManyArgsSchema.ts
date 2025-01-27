import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramInviteWhereInputSchema } from '../inputTypeSchemas/ProgramInviteWhereInputSchema'

export const ProgramInviteDeleteManyArgsSchema: z.ZodType<Prisma.ProgramInviteDeleteManyArgs> = z
    .object({
        where: ProgramInviteWhereInputSchema.optional()
    })
    .strict()

export default ProgramInviteDeleteManyArgsSchema
