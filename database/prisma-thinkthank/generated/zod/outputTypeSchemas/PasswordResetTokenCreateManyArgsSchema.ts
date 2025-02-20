import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PasswordResetTokenCreateManyInputSchema } from '../inputTypeSchemas/PasswordResetTokenCreateManyInputSchema'

export const PasswordResetTokenCreateManyArgsSchema: z.ZodType<Prisma.PasswordResetTokenCreateManyArgs> = z
    .object({
        data: z.union([PasswordResetTokenCreateManyInputSchema, PasswordResetTokenCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PasswordResetTokenCreateManyArgsSchema
