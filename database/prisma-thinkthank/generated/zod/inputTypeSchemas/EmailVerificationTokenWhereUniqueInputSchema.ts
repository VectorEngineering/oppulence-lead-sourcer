import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema } from './EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema'
import { EmailVerificationTokenWhereInputSchema } from './EmailVerificationTokenWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const EmailVerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.EmailVerificationTokenWhereUniqueInput> = z
    .union([
        z.object({
            token: z.string(),
            identifier_token: z.lazy(() => EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema)
        }),
        z.object({
            token: z.string()
        }),
        z.object({
            identifier_token: z.lazy(() => EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                token: z.string().optional(),
                identifier_token: z.lazy(() => EmailVerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
                AND: z
                    .union([
                        z.lazy(() => EmailVerificationTokenWhereInputSchema),
                        z.lazy(() => EmailVerificationTokenWhereInputSchema).array()
                    ])
                    .optional(),
                OR: z
                    .lazy(() => EmailVerificationTokenWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => EmailVerificationTokenWhereInputSchema),
                        z.lazy(() => EmailVerificationTokenWhereInputSchema).array()
                    ])
                    .optional(),
                identifier: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                expires: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
            })
            .strict()
    )

export default EmailVerificationTokenWhereUniqueInputSchema
