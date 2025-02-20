import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const PartnerCountOutputTypeSelectSchema: z.ZodType<Prisma.PartnerCountOutputTypeSelect> = z
    .object({
        programs: z.boolean().optional(),
        applications: z.boolean().optional(),
        users: z.boolean().optional(),
        invites: z.boolean().optional(),
        payouts: z.boolean().optional(),
        sales: z.boolean().optional()
    })
    .strict()

export default PartnerCountOutputTypeSelectSchema
