import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'
import { TransactionUpdateWithoutAttachmentsInputSchema } from './TransactionUpdateWithoutAttachmentsInputSchema'
import { TransactionUncheckedUpdateWithoutAttachmentsInputSchema } from './TransactionUncheckedUpdateWithoutAttachmentsInputSchema'

export const TransactionUpdateToOneWithWhereWithoutAttachmentsInputSchema: z.ZodType<Prisma.TransactionUpdateToOneWithWhereWithoutAttachmentsInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => TransactionUpdateWithoutAttachmentsInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutAttachmentsInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateToOneWithWhereWithoutAttachmentsInputSchema
