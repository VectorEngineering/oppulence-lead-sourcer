import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxUpdateWithoutSharesInputSchema } from './InboxUpdateWithoutSharesInputSchema'
import { InboxUncheckedUpdateWithoutSharesInputSchema } from './InboxUncheckedUpdateWithoutSharesInputSchema'
import { InboxCreateWithoutSharesInputSchema } from './InboxCreateWithoutSharesInputSchema'
import { InboxUncheckedCreateWithoutSharesInputSchema } from './InboxUncheckedCreateWithoutSharesInputSchema'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'

export const InboxUpsertWithoutSharesInputSchema: z.ZodType<Prisma.InboxUpsertWithoutSharesInput> = z
    .object({
        update: z.union([z.lazy(() => InboxUpdateWithoutSharesInputSchema), z.lazy(() => InboxUncheckedUpdateWithoutSharesInputSchema)]),
        create: z.union([z.lazy(() => InboxCreateWithoutSharesInputSchema), z.lazy(() => InboxUncheckedCreateWithoutSharesInputSchema)]),
        where: z.lazy(() => InboxWhereInputSchema).optional()
    })
    .strict()

export default InboxUpsertWithoutSharesInputSchema
