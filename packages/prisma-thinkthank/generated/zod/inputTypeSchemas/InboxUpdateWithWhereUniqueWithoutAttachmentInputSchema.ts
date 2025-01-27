import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithoutAttachmentInputSchema } from './InboxUpdateWithoutAttachmentInputSchema'
import { InboxUncheckedUpdateWithoutAttachmentInputSchema } from './InboxUncheckedUpdateWithoutAttachmentInputSchema'

export const InboxUpdateWithWhereUniqueWithoutAttachmentInputSchema: z.ZodType<Prisma.InboxUpdateWithWhereUniqueWithoutAttachmentInput> = z
    .object({
        where: z.lazy(() => InboxWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => InboxUpdateWithoutAttachmentInputSchema),
            z.lazy(() => InboxUncheckedUpdateWithoutAttachmentInputSchema)
        ])
    })
    .strict()

export default InboxUpdateWithWhereUniqueWithoutAttachmentInputSchema
