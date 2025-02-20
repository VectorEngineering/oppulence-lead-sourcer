import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema'
import { InboxUpdateManyMutationInputSchema } from './InboxUpdateManyMutationInputSchema'
import { InboxUncheckedUpdateManyWithoutTransactionInputSchema } from './InboxUncheckedUpdateManyWithoutTransactionInputSchema'

export const InboxUpdateManyWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.InboxUpdateManyWithWhereWithoutTransactionInput> = z
    .object({
        where: z.lazy(() => InboxScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => InboxUpdateManyMutationInputSchema),
            z.lazy(() => InboxUncheckedUpdateManyWithoutTransactionInputSchema)
        ])
    })
    .strict()

export default InboxUpdateManyWithWhereWithoutTransactionInputSchema
