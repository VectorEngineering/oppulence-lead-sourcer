import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxLabelWhereUniqueInputSchema } from './InboxLabelWhereUniqueInputSchema'
import { InboxLabelUpdateWithoutInboxInputSchema } from './InboxLabelUpdateWithoutInboxInputSchema'
import { InboxLabelUncheckedUpdateWithoutInboxInputSchema } from './InboxLabelUncheckedUpdateWithoutInboxInputSchema'

export const InboxLabelUpdateWithWhereUniqueWithoutInboxInputSchema: z.ZodType<Prisma.InboxLabelUpdateWithWhereUniqueWithoutInboxInput> = z
    .object({
        where: z.lazy(() => InboxLabelWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => InboxLabelUpdateWithoutInboxInputSchema),
            z.lazy(() => InboxLabelUncheckedUpdateWithoutInboxInputSchema)
        ])
    })
    .strict()

export default InboxLabelUpdateWithWhereUniqueWithoutInboxInputSchema
