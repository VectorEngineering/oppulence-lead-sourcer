import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentWhereInputSchema } from './TransactionAttachmentWhereInputSchema'

export const TransactionAttachmentNullableRelationFilterSchema: z.ZodType<Prisma.TransactionAttachmentNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => TransactionAttachmentWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => TransactionAttachmentWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default TransactionAttachmentNullableRelationFilterSchema
