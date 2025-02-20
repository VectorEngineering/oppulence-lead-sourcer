import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceTemplateWhereInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereInputSchema'

export const InvoiceTemplateDeleteManyArgsSchema: z.ZodType<Prisma.InvoiceTemplateDeleteManyArgs> = z
    .object({
        where: InvoiceTemplateWhereInputSchema.optional()
    })
    .strict()

export default InvoiceTemplateDeleteManyArgsSchema
