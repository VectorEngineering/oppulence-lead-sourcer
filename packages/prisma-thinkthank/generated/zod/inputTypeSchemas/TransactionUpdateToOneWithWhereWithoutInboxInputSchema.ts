import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'
import { TransactionUpdateWithoutInboxInputSchema } from './TransactionUpdateWithoutInboxInputSchema'
import { TransactionUncheckedUpdateWithoutInboxInputSchema } from './TransactionUncheckedUpdateWithoutInboxInputSchema'

export const TransactionUpdateToOneWithWhereWithoutInboxInputSchema: z.ZodType<Prisma.TransactionUpdateToOneWithWhereWithoutInboxInput> = z
    .object({
        where: z.lazy(() => TransactionWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => TransactionUpdateWithoutInboxInputSchema),
            z.lazy(() => TransactionUncheckedUpdateWithoutInboxInputSchema)
        ])
    })
    .strict()

export default TransactionUpdateToOneWithWhereWithoutInboxInputSchema
