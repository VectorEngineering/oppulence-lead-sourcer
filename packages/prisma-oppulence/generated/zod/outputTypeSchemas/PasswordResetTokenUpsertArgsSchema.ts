import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PasswordResetTokenWhereUniqueInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereUniqueInputSchema'
import { PasswordResetTokenCreateInputSchema } from '../inputTypeSchemas/PasswordResetTokenCreateInputSchema'
import { PasswordResetTokenUncheckedCreateInputSchema } from '../inputTypeSchemas/PasswordResetTokenUncheckedCreateInputSchema'
import { PasswordResetTokenUpdateInputSchema } from '../inputTypeSchemas/PasswordResetTokenUpdateInputSchema'
import { PasswordResetTokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/PasswordResetTokenUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasswordResetTokenSelectSchema: z.ZodType<Prisma.PasswordResetTokenSelect> = z
    .object({
        identifier: z.boolean().optional(),
        token: z.boolean().optional(),
        expires: z.boolean().optional()
    })
    .strict()

export const PasswordResetTokenUpsertArgsSchema: z.ZodType<Prisma.PasswordResetTokenUpsertArgs> = z
    .object({
        select: PasswordResetTokenSelectSchema.optional(),
        where: PasswordResetTokenWhereUniqueInputSchema,
        create: z.union([PasswordResetTokenCreateInputSchema, PasswordResetTokenUncheckedCreateInputSchema]),
        update: z.union([PasswordResetTokenUpdateInputSchema, PasswordResetTokenUncheckedUpdateInputSchema])
    })
    .strict()

export default PasswordResetTokenUpsertArgsSchema
