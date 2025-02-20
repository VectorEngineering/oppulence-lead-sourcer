import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const jackson_indexCreateManyInputSchema: z.ZodType<Prisma.jackson_indexCreateManyInput> = z
    .object({
        id: z.number().int().optional(),
        key: z.string(),
        storeKey: z.string()
    })
    .strict()

export default jackson_indexCreateManyInputSchema
