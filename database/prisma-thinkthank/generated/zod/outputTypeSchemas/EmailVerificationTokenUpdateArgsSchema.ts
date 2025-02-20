import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EmailVerificationTokenUpdateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUpdateInputSchema'
import { EmailVerificationTokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUncheckedUpdateInputSchema'
import { EmailVerificationTokenWhereUniqueInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailVerificationTokenSelectSchema: z.ZodType<Prisma.EmailVerificationTokenSelect> = z
    .object({
        identifier: z.boolean().optional(),
        token: z.boolean().optional(),
        expires: z.boolean().optional()
    })
    .strict()

export const EmailVerificationTokenUpdateArgsSchema: z.ZodType<Prisma.EmailVerificationTokenUpdateArgs> = z
    .object({
        select: EmailVerificationTokenSelectSchema.optional(),
        data: z.union([EmailVerificationTokenUpdateInputSchema, EmailVerificationTokenUncheckedUpdateInputSchema]),
        where: EmailVerificationTokenWhereUniqueInputSchema
    })
    .strict()

export default EmailVerificationTokenUpdateArgsSchema
