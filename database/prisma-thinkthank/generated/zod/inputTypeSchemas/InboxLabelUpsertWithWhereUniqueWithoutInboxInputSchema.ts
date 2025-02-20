import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxLabelWhereUniqueInputSchema } from './InboxLabelWhereUniqueInputSchema'
import { InboxLabelUpdateWithoutInboxInputSchema } from './InboxLabelUpdateWithoutInboxInputSchema'
import { InboxLabelUncheckedUpdateWithoutInboxInputSchema } from './InboxLabelUncheckedUpdateWithoutInboxInputSchema'
import { InboxLabelCreateWithoutInboxInputSchema } from './InboxLabelCreateWithoutInboxInputSchema'
import { InboxLabelUncheckedCreateWithoutInboxInputSchema } from './InboxLabelUncheckedCreateWithoutInboxInputSchema'

export const InboxLabelUpsertWithWhereUniqueWithoutInboxInputSchema: z.ZodType<Prisma.InboxLabelUpsertWithWhereUniqueWithoutInboxInput> = z
    .object({
        where: z.lazy(() => InboxLabelWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => InboxLabelUpdateWithoutInboxInputSchema),
            z.lazy(() => InboxLabelUncheckedUpdateWithoutInboxInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InboxLabelCreateWithoutInboxInputSchema),
            z.lazy(() => InboxLabelUncheckedCreateWithoutInboxInputSchema)
        ])
    })
    .strict()

export default InboxLabelUpsertWithWhereUniqueWithoutInboxInputSchema
