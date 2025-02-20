import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.PasswordResetTokenIdentifierTokenCompoundUniqueInput> =
    z
        .object({
            identifier: z.string(),
            token: z.string()
        })
        .strict()

export default PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema
