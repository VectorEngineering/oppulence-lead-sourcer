import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceTemplateWhereInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereInputSchema'
import { InvoiceTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InvoiceTemplateOrderByWithAggregationInputSchema'
import { InvoiceTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceTemplateScalarFieldEnumSchema'
import { InvoiceTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InvoiceTemplateScalarWhereWithAggregatesInputSchema'

export const InvoiceTemplateGroupByArgsSchema: z.ZodType<Prisma.InvoiceTemplateGroupByArgs> = z
    .object({
        where: InvoiceTemplateWhereInputSchema.optional(),
        orderBy: z
            .union([InvoiceTemplateOrderByWithAggregationInputSchema.array(), InvoiceTemplateOrderByWithAggregationInputSchema])
            .optional(),
        by: InvoiceTemplateScalarFieldEnumSchema.array(),
        having: InvoiceTemplateScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InvoiceTemplateGroupByArgsSchema
