import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionAttachmentWhereInputSchema } from '../inputTypeSchemas/TransactionAttachmentWhereInputSchema'

export const TransactionAttachmentDeleteManyArgsSchema: z.ZodType<Prisma.TransactionAttachmentDeleteManyArgs> = z
    .object({
        where: TransactionAttachmentWhereInputSchema.optional()
    })
    .strict()

export default TransactionAttachmentDeleteManyArgsSchema
