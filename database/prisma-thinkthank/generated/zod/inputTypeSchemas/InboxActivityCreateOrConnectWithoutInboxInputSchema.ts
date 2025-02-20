import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityWhereUniqueInputSchema } from './InboxActivityWhereUniqueInputSchema'
import { InboxActivityCreateWithoutInboxInputSchema } from './InboxActivityCreateWithoutInboxInputSchema'
import { InboxActivityUncheckedCreateWithoutInboxInputSchema } from './InboxActivityUncheckedCreateWithoutInboxInputSchema'

export const InboxActivityCreateOrConnectWithoutInboxInputSchema: z.ZodType<Prisma.InboxActivityCreateOrConnectWithoutInboxInput> = z
    .object({
        where: z.lazy(() => InboxActivityWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InboxActivityCreateWithoutInboxInputSchema),
            z.lazy(() => InboxActivityUncheckedCreateWithoutInboxInputSchema)
        ])
    })
    .strict()

export default InboxActivityCreateOrConnectWithoutInboxInputSchema
