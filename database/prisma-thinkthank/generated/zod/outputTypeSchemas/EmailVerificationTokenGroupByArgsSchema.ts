import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EmailVerificationTokenWhereInputSchema } from '../inputTypeSchemas/EmailVerificationTokenWhereInputSchema'
import { EmailVerificationTokenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EmailVerificationTokenOrderByWithAggregationInputSchema'
import { EmailVerificationTokenScalarFieldEnumSchema } from '../inputTypeSchemas/EmailVerificationTokenScalarFieldEnumSchema'
import { EmailVerificationTokenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EmailVerificationTokenScalarWhereWithAggregatesInputSchema'

export const EmailVerificationTokenGroupByArgsSchema: z.ZodType<Prisma.EmailVerificationTokenGroupByArgs> = z
    .object({
        where: EmailVerificationTokenWhereInputSchema.optional(),
        orderBy: z
            .union([
                EmailVerificationTokenOrderByWithAggregationInputSchema.array(),
                EmailVerificationTokenOrderByWithAggregationInputSchema
            ])
            .optional(),
        by: EmailVerificationTokenScalarFieldEnumSchema.array(),
        having: EmailVerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default EmailVerificationTokenGroupByArgsSchema
