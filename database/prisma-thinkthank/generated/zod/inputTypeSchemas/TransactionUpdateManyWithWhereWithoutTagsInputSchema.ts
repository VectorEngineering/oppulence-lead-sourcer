import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema'
import { TransactionUpdateManyMutationInputSchema } from './TransactionUpdateManyMutationInputSchema'
import { TransactionUncheckedUpdateManyWithoutTagsInputSchema } from './TransactionUncheckedUpdateManyWithoutTagsInputSchema'

export const TransactionUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutTagsInput> = z
    .object({
        where: z.lazy(() => TransactionScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => TransactionUpdateManyMutationInputSchema),
            z.lazy(() => TransactionUncheckedUpdateManyWithoutTagsInputSchema)
        ])
    })
    .strict()

export default TransactionUpdateManyWithWhereWithoutTagsInputSchema
