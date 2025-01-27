import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceTemplateOrderByRelevanceFieldEnumSchema } from './InvoiceTemplateOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceTemplateOrderByRelevanceInputSchema: z.ZodType<Prisma.InvoiceTemplateOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => InvoiceTemplateOrderByRelevanceFieldEnumSchema),
            z.lazy(() => InvoiceTemplateOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default InvoiceTemplateOrderByRelevanceInputSchema
