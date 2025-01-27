import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateWhereInputSchema } from './InvoiceTemplateWhereInputSchema'

export const InvoiceTemplateListRelationFilterSchema: z.ZodType<Prisma.InvoiceTemplateListRelationFilter> = z
    .object({
        every: z.lazy(() => InvoiceTemplateWhereInputSchema).optional(),
        some: z.lazy(() => InvoiceTemplateWhereInputSchema).optional(),
        none: z.lazy(() => InvoiceTemplateWhereInputSchema).optional()
    })
    .strict()

export default InvoiceTemplateListRelationFilterSchema
