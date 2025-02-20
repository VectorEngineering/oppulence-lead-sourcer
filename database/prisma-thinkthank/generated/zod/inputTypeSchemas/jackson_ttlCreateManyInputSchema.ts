import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const jackson_ttlCreateManyInputSchema: z.ZodType<Prisma.jackson_ttlCreateManyInput> = z
    .object({
        key: z.string(),
        expiresAt: z.bigint()
    })
    .strict()

export default jackson_ttlCreateManyInputSchema
