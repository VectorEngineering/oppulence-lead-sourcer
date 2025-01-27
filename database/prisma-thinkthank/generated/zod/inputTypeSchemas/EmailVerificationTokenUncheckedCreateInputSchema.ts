import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const EmailVerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.EmailVerificationTokenUncheckedCreateInput> = z
    .object({
        identifier: z.string(),
        token: z.string(),
        expires: z.coerce.date()
    })
    .strict()

export default EmailVerificationTokenUncheckedCreateInputSchema
