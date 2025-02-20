import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EmailVerificationTokenWhereInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereInputSchema'
import { EmailVerificationTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/EmailVerificationTokenOrderByWithRelationInputSchema'
import { EmailVerificationTokenWhereUniqueInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereUniqueInputSchema'
import { EmailVerificationTokenScalarFieldEnumSchema } from '../inputTypeSchemas/EmailVerificationTokenScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailVerificationTokenSelectSchema: z.ZodType<Prisma.EmailVerificationTokenSelect> = z
    .object({
        identifier: z.boolean().optional(),
        token: z.boolean().optional(),
        expires: z.boolean().optional()
    })
    .strict()

export const EmailVerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.EmailVerificationTokenFindFirstArgs> = z
    .object({
        select: EmailVerificationTokenSelectSchema.optional(),
        where: EmailVerificationTokenWhereInputSchema.optional(),
        orderBy: z
            .union([EmailVerificationTokenOrderByWithRelationInputSchema.array(), EmailVerificationTokenOrderByWithRelationInputSchema])
            .optional(),
        cursor: EmailVerificationTokenWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([EmailVerificationTokenScalarFieldEnumSchema, EmailVerificationTokenScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default EmailVerificationTokenFindFirstArgsSchema
