import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const jackson_indexSelectSchema: z.ZodType<Prisma.jackson_indexSelect> = z
    .object({
        id: z.boolean().optional(),
        key: z.boolean().optional(),
        storeKey: z.boolean().optional()
    })
    .strict()

export default jackson_indexSelectSchema
