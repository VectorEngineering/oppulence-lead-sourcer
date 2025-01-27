import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramInviteCreateManyInputSchema } from '../inputTypeSchemas/ProgramInviteCreateManyInputSchema'

export const ProgramInviteCreateManyArgsSchema: z.ZodType<Prisma.ProgramInviteCreateManyArgs> = z
    .object({
        data: z.union([ProgramInviteCreateManyInputSchema, ProgramInviteCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramInviteCreateManyArgsSchema
