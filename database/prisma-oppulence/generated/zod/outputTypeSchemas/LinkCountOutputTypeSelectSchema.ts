import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const LinkCountOutputTypeSelectSchema: z.ZodType<Prisma.LinkCountOutputTypeSelect> = z
    .object({
        tags: z.boolean().optional(),
        webhooks: z.boolean().optional(),
        customers: z.boolean().optional()
    })
    .strict()

export default LinkCountOutputTypeSelectSchema
