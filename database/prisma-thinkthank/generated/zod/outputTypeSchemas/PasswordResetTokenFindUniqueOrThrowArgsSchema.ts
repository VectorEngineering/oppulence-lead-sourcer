import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PasswordResetTokenWhereUniqueInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasswordResetTokenSelectSchema: z.ZodType<Prisma.PasswordResetTokenSelect> = z
    .object({
        identifier: z.boolean().optional(),
        token: z.boolean().optional(),
        expires: z.boolean().optional()
    })
    .strict()

export const PasswordResetTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PasswordResetTokenFindUniqueOrThrowArgs> = z
    .object({
        select: PasswordResetTokenSelectSchema.optional(),
        where: PasswordResetTokenWhereUniqueInputSchema
    })
    .strict()

export default PasswordResetTokenFindUniqueOrThrowArgsSchema
