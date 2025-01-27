import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentWhereInputSchema } from './TransactionAttachmentWhereInputSchema'

export const TransactionAttachmentListRelationFilterSchema: z.ZodType<Prisma.TransactionAttachmentListRelationFilter> = z
    .object({
        every: z.lazy(() => TransactionAttachmentWhereInputSchema).optional(),
        some: z.lazy(() => TransactionAttachmentWhereInputSchema).optional(),
        none: z.lazy(() => TransactionAttachmentWhereInputSchema).optional()
    })
    .strict()

export default TransactionAttachmentListRelationFilterSchema
