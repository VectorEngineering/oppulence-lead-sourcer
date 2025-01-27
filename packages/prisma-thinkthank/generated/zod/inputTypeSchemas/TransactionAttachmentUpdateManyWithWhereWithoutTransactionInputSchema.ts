import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentScalarWhereInputSchema } from './TransactionAttachmentScalarWhereInputSchema'
import { TransactionAttachmentUpdateManyMutationInputSchema } from './TransactionAttachmentUpdateManyMutationInputSchema'
import { TransactionAttachmentUncheckedUpdateManyWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedUpdateManyWithoutTransactionInputSchema'

export const TransactionAttachmentUpdateManyWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateManyWithWhereWithoutTransactionInput> =
    z
        .object({
            where: z.lazy(() => TransactionAttachmentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => TransactionAttachmentUpdateManyMutationInputSchema),
                z.lazy(() => TransactionAttachmentUncheckedUpdateManyWithoutTransactionInputSchema)
            ])
        })
        .strict()

export default TransactionAttachmentUpdateManyWithWhereWithoutTransactionInputSchema
