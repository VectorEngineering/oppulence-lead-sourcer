import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateWithoutTagsInputSchema } from './TransactionUpdateWithoutTagsInputSchema'
import { TransactionUncheckedUpdateWithoutTagsInputSchema } from './TransactionUncheckedUpdateWithoutTagsInputSchema'
import { TransactionCreateWithoutTagsInputSchema } from './TransactionCreateWithoutTagsInputSchema'
import { TransactionUncheckedCreateWithoutTagsInputSchema } from './TransactionUncheckedCreateWithoutTagsInputSchema'

export const TransactionUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutTagsInput> = z
    .object({
        where: z.lazy(() => TransactionWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => TransactionUpdateWithoutTagsInputSchema),
            z.lazy(() => TransactionUncheckedUpdateWithoutTagsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TransactionCreateWithoutTagsInputSchema),
            z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema)
        ])
    })
    .strict()

export default TransactionUpsertWithWhereUniqueWithoutTagsInputSchema
