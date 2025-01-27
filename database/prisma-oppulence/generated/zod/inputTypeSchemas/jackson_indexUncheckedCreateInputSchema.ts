import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const jackson_indexUncheckedCreateInputSchema: z.ZodType<Prisma.jackson_indexUncheckedCreateInput> = z
    .object({
        id: z.number().int().optional(),
        key: z.string(),
        storeKey: z.string()
    })
    .strict()

export default jackson_indexUncheckedCreateInputSchema
