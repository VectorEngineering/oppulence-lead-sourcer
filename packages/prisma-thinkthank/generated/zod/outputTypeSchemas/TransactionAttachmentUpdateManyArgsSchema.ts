import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionAttachmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/TransactionAttachmentUpdateManyMutationInputSchema'
import { TransactionAttachmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TransactionAttachmentUncheckedUpdateManyInputSchema'
import { TransactionAttachmentWhereInputSchema } from '../inputTypeSchemas/TransactionAttachmentWhereInputSchema'

export const TransactionAttachmentUpdateManyArgsSchema: z.ZodType<Prisma.TransactionAttachmentUpdateManyArgs> = z
    .object({
        data: z.union([TransactionAttachmentUpdateManyMutationInputSchema, TransactionAttachmentUncheckedUpdateManyInputSchema]),
        where: TransactionAttachmentWhereInputSchema.optional()
    })
    .strict()

export default TransactionAttachmentUpdateManyArgsSchema
