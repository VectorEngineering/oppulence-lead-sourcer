import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const CustomerCountOutputTypeSelectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = z
    .object({
        sales: z.boolean().optional(),
        CustomerTags: z.boolean().optional(),
        Contracts: z.boolean().optional(),
        Invoice: z.boolean().optional()
    })
    .strict()

export default CustomerCountOutputTypeSelectSchema
