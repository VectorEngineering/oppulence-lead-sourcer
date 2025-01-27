import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxCreateWithoutLabelsInputSchema } from './InboxCreateWithoutLabelsInputSchema'
import { InboxUncheckedCreateWithoutLabelsInputSchema } from './InboxUncheckedCreateWithoutLabelsInputSchema'

export const InboxCreateOrConnectWithoutLabelsInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutLabelsInput> = z
    .object({
        where: z.lazy(() => InboxWhereUniqueInputSchema),
        create: z.union([z.lazy(() => InboxCreateWithoutLabelsInputSchema), z.lazy(() => InboxUncheckedCreateWithoutLabelsInputSchema)])
    })
    .strict()

export default InboxCreateOrConnectWithoutLabelsInputSchema
