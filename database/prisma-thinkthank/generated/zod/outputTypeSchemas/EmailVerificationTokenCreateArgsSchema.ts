import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EmailVerificationTokenCreateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenCreateInputSchema'
import { EmailVerificationTokenUncheckedCreateInputSchema } from '../inputTypeSchemas/EmailVerificationTokenUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailVerificationTokenSelectSchema: z.ZodType<Prisma.EmailVerificationTokenSelect> = z
    .object({
        identifier: z.boolean().optional(),
        token: z.boolean().optional(),
        expires: z.boolean().optional()
    })
    .strict()

export const EmailVerificationTokenCreateArgsSchema: z.ZodType<Prisma.EmailVerificationTokenCreateArgs> = z
    .object({
        select: EmailVerificationTokenSelectSchema.optional(),
        data: z.union([EmailVerificationTokenCreateInputSchema, EmailVerificationTokenUncheckedCreateInputSchema])
    })
    .strict()

export default EmailVerificationTokenCreateArgsSchema
