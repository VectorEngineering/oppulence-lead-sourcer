import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EmailVerificationTokenWhereUniqueInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereUniqueInputSchema'
import { EmailVerificationTokenCreateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenCreateInputSchema'
import { EmailVerificationTokenUncheckedCreateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUncheckedCreateInputSchema'
import { EmailVerificationTokenUpdateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUpdateInputSchema'
import { EmailVerificationTokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailVerificationTokenSelectSchema: z.ZodType<Prisma.EmailVerificationTokenSelect> = z
    .object({
        identifier: z.boolean().optional(),
        token: z.boolean().optional(),
        expires: z.boolean().optional()
    })
    .strict()

export const EmailVerificationTokenUpsertArgsSchema: z.ZodType<Prisma.EmailVerificationTokenUpsertArgs> = z
    .object({
        select: EmailVerificationTokenSelectSchema.optional(),
        where: EmailVerificationTokenWhereUniqueInputSchema,
        create: z.union([EmailVerificationTokenCreateInputSchema, EmailVerificationTokenUncheckedCreateInputSchema]),
        update: z.union([EmailVerificationTokenUpdateInputSchema, EmailVerificationTokenUncheckedUpdateInputSchema])
    })
    .strict()

export default EmailVerificationTokenUpsertArgsSchema
