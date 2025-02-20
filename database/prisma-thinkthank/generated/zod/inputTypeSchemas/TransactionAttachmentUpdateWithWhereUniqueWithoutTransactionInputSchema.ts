import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema'
import { TransactionAttachmentUpdateWithoutTransactionInputSchema } from './TransactionAttachmentUpdateWithoutTransactionInputSchema'
import { TransactionAttachmentUncheckedUpdateWithoutTransactionInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutTransactionInputSchema'

export const TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInput> =
    z
        .object({
            where: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionAttachmentUpdateWithoutTransactionInputSchema),
                z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutTransactionInputSchema)
            ])
        })
        .strict()

export default TransactionAttachmentUpdateWithWhereUniqueWithoutTransactionInputSchema
