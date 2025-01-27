import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const InvoiceTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.InvoiceTemplateCountOutputTypeSelect> = z
    .object({
        Invoice: z.boolean().optional()
    })
    .strict()

export default InvoiceTemplateCountOutputTypeSelectSchema
