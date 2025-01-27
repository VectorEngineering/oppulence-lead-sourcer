import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const jackson_ttlCreateInputSchema: z.ZodType<Prisma.jackson_ttlCreateInput> = z
    .object({
        key: z.string(),
        expiresAt: z.bigint()
    })
    .strict()

export default jackson_ttlCreateInputSchema
