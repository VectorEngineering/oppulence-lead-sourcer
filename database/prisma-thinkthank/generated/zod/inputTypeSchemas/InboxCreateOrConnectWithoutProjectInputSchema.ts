import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxCreateWithoutProjectInputSchema } from './InboxCreateWithoutProjectInputSchema'
import { InboxUncheckedCreateWithoutProjectInputSchema } from './InboxUncheckedCreateWithoutProjectInputSchema'

export const InboxCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => InboxWhereUniqueInputSchema),
        create: z.union([z.lazy(() => InboxCreateWithoutProjectInputSchema), z.lazy(() => InboxUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default InboxCreateOrConnectWithoutProjectInputSchema
