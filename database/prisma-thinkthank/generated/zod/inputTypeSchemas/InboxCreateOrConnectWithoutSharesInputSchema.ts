import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxCreateWithoutSharesInputSchema } from './InboxCreateWithoutSharesInputSchema'
import { InboxUncheckedCreateWithoutSharesInputSchema } from './InboxUncheckedCreateWithoutSharesInputSchema'

export const InboxCreateOrConnectWithoutSharesInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutSharesInput> = z
    .object({
        where: z.lazy(() => InboxWhereUniqueInputSchema),
        create: z.union([z.lazy(() => InboxCreateWithoutSharesInputSchema), z.lazy(() => InboxUncheckedCreateWithoutSharesInputSchema)])
    })
    .strict()

export default InboxCreateOrConnectWithoutSharesInputSchema
