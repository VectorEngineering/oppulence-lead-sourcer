import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const EmailVerificationTokenCreateInputSchema: z.ZodType<Prisma.EmailVerificationTokenCreateInput> = z
    .object({
        identifier: z.string(),
        token: z.string(),
        expires: z.coerce.date()
    })
    .strict()

export default EmailVerificationTokenCreateInputSchema
