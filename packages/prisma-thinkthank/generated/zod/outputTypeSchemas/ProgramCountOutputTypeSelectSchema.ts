import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const ProgramCountOutputTypeSelectSchema: z.ZodType<Prisma.ProgramCountOutputTypeSelect> = z
    .object({
        discounts: z.boolean().optional(),
        partners: z.boolean().optional(),
        payouts: z.boolean().optional(),
        sales: z.boolean().optional(),
        invoices: z.boolean().optional(),
        resources: z.boolean().optional(),
        applications: z.boolean().optional(),
        invites: z.boolean().optional(),
        links: z.boolean().optional()
    })
    .strict()

export default ProgramCountOutputTypeSelectSchema
