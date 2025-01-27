import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityWhereUniqueInputSchema } from './InboxActivityWhereUniqueInputSchema'
import { InboxActivityUpdateWithoutInboxInputSchema } from './InboxActivityUpdateWithoutInboxInputSchema'
import { InboxActivityUncheckedUpdateWithoutInboxInputSchema } from './InboxActivityUncheckedUpdateWithoutInboxInputSchema'
import { InboxActivityCreateWithoutInboxInputSchema } from './InboxActivityCreateWithoutInboxInputSchema'
import { InboxActivityUncheckedCreateWithoutInboxInputSchema } from './InboxActivityUncheckedCreateWithoutInboxInputSchema'

export const InboxActivityUpsertWithWhereUniqueWithoutInboxInputSchema: z.ZodType<Prisma.InboxActivityUpsertWithWhereUniqueWithoutInboxInput> =
    z
        .object({
            where: z.lazy(() => InboxActivityWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => InboxActivityUpdateWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUncheckedUpdateWithoutInboxInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InboxActivityCreateWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUncheckedCreateWithoutInboxInputSchema)
            ])
        })
        .strict()

export default InboxActivityUpsertWithWhereUniqueWithoutInboxInputSchema
