import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithoutTransactionInputSchema } from './InboxUpdateWithoutTransactionInputSchema'
import { InboxUncheckedUpdateWithoutTransactionInputSchema } from './InboxUncheckedUpdateWithoutTransactionInputSchema'

export const InboxUpdateWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.InboxUpdateWithWhereUniqueWithoutTransactionInput> =
    z
        .object({
            where: z.lazy(() => InboxWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => InboxUpdateWithoutTransactionInputSchema),
                z.lazy(() => InboxUncheckedUpdateWithoutTransactionInputSchema)
            ])
        })
        .strict()

export default InboxUpdateWithWhereUniqueWithoutTransactionInputSchema
