import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const InboxLabelInboxIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.InboxLabelInboxIdNameCompoundUniqueInput> = z
    .object({
        inboxId: z.string(),
        name: z.string()
    })
    .strict()

export default InboxLabelInboxIdNameCompoundUniqueInputSchema
