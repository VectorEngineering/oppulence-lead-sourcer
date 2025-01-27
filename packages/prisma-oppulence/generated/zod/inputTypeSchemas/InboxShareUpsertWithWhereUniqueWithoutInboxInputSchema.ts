import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxShareWhereUniqueInputSchema } from './InboxShareWhereUniqueInputSchema'
import { InboxShareUpdateWithoutInboxInputSchema } from './InboxShareUpdateWithoutInboxInputSchema'
import { InboxShareUncheckedUpdateWithoutInboxInputSchema } from './InboxShareUncheckedUpdateWithoutInboxInputSchema'
import { InboxShareCreateWithoutInboxInputSchema } from './InboxShareCreateWithoutInboxInputSchema'
import { InboxShareUncheckedCreateWithoutInboxInputSchema } from './InboxShareUncheckedCreateWithoutInboxInputSchema'

export const InboxShareUpsertWithWhereUniqueWithoutInboxInputSchema: z.ZodType<Prisma.InboxShareUpsertWithWhereUniqueWithoutInboxInput> = z
    .object({
        where: z.lazy(() => InboxShareWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => InboxShareUpdateWithoutInboxInputSchema),
            z.lazy(() => InboxShareUncheckedUpdateWithoutInboxInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InboxShareCreateWithoutInboxInputSchema),
            z.lazy(() => InboxShareUncheckedCreateWithoutInboxInputSchema)
        ])
    })
    .strict()

export default InboxShareUpsertWithWhereUniqueWithoutInboxInputSchema
