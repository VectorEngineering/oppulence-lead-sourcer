import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionUpdateWithoutInboxInputSchema } from './TransactionUpdateWithoutInboxInputSchema'
import { TransactionUncheckedUpdateWithoutInboxInputSchema } from './TransactionUncheckedUpdateWithoutInboxInputSchema'
import { TransactionCreateWithoutInboxInputSchema } from './TransactionCreateWithoutInboxInputSchema'
import { TransactionUncheckedCreateWithoutInboxInputSchema } from './TransactionUncheckedCreateWithoutInboxInputSchema'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'

export const TransactionUpsertWithoutInboxInputSchema: z.ZodType<Prisma.TransactionUpsertWithoutInboxInput> = z
    .object({
        update: z.union([
            z.lazy(() => TransactionUpdateWithoutInboxInputSchema),
            z.lazy(() => TransactionUncheckedUpdateWithoutInboxInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TransactionCreateWithoutInboxInputSchema),
            z.lazy(() => TransactionUncheckedCreateWithoutInboxInputSchema)
        ]),
        where: z.lazy(() => TransactionWhereInputSchema).optional()
    })
    .strict()

export default TransactionUpsertWithoutInboxInputSchema
