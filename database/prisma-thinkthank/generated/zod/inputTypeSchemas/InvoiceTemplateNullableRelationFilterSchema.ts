import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateWhereInputSchema } from './InvoiceTemplateWhereInputSchema'

export const InvoiceTemplateNullableRelationFilterSchema: z.ZodType<Prisma.InvoiceTemplateNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => InvoiceTemplateWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => InvoiceTemplateWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default InvoiceTemplateNullableRelationFilterSchema
