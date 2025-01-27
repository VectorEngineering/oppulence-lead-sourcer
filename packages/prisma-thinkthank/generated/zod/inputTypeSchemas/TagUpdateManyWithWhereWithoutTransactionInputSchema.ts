import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema'
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema'
import { TagUncheckedUpdateManyWithoutTransactionInputSchema } from './TagUncheckedUpdateManyWithoutTransactionInputSchema'

export const TagUpdateManyWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutTransactionInput> = z
    .object({
        where: z.lazy(() => TagScalarWhereInputSchema),
        data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutTransactionInputSchema)])
    })
    .strict()

export default TagUpdateManyWithWhereWithoutTransactionInputSchema
