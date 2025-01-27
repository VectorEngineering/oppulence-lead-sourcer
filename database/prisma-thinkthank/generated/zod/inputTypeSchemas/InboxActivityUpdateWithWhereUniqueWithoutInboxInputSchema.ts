import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityWhereUniqueInputSchema } from './InboxActivityWhereUniqueInputSchema'
import { InboxActivityUpdateWithoutInboxInputSchema } from './InboxActivityUpdateWithoutInboxInputSchema'
import { InboxActivityUncheckedUpdateWithoutInboxInputSchema } from './InboxActivityUncheckedUpdateWithoutInboxInputSchema'

export const InboxActivityUpdateWithWhereUniqueWithoutInboxInputSchema: z.ZodType<Prisma.InboxActivityUpdateWithWhereUniqueWithoutInboxInput> =
    z
        .object({
            where: z.lazy(() => InboxActivityWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => InboxActivityUpdateWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUncheckedUpdateWithoutInboxInputSchema)
            ])
        })
        .strict()

export default InboxActivityUpdateWithWhereUniqueWithoutInboxInputSchema
