import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionCreateWithoutAttachmentsInputSchema } from './TransactionCreateWithoutAttachmentsInputSchema'
import { TransactionUncheckedCreateWithoutAttachmentsInputSchema } from './TransactionUncheckedCreateWithoutAttachmentsInputSchema'

export const TransactionCreateOrConnectWithoutAttachmentsInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutAttachmentsInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => TransactionCreateWithoutAttachmentsInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutAttachmentsInputSchema)
            ])
        })
        .strict()

export default TransactionCreateOrConnectWithoutAttachmentsInputSchema
