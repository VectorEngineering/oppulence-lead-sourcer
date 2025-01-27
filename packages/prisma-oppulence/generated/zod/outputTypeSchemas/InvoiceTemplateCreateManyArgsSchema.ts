import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceTemplateCreateManyInputSchema } from '../inputTypeSchemas/InvoiceTemplateCreateManyInputSchema'

export const InvoiceTemplateCreateManyArgsSchema: z.ZodType<Prisma.InvoiceTemplateCreateManyArgs> = z
    .object({
        data: z.union([InvoiceTemplateCreateManyInputSchema, InvoiceTemplateCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InvoiceTemplateCreateManyArgsSchema
