import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceAttachmentWhereInputSchema } from './InvoiceAttachmentWhereInputSchema'

export const InvoiceAttachmentListRelationFilterSchema: z.ZodType<Prisma.InvoiceAttachmentListRelationFilter> = z
    .object({
        every: z.lazy(() => InvoiceAttachmentWhereInputSchema).optional(),
        some: z.lazy(() => InvoiceAttachmentWhereInputSchema).optional(),
        none: z.lazy(() => InvoiceAttachmentWhereInputSchema).optional()
    })
    .strict()

export default InvoiceAttachmentListRelationFilterSchema
