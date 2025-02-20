import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxLabelSelectSchema } from '../inputTypeSchemas/InboxLabelSelectSchema'
import { InboxLabelIncludeSchema } from '../inputTypeSchemas/InboxLabelIncludeSchema'

export const InboxLabelArgsSchema: z.ZodType<Prisma.InboxLabelDefaultArgs> = z
    .object({
        select: z.lazy(() => InboxLabelSelectSchema).optional(),
        include: z.lazy(() => InboxLabelIncludeSchema).optional()
    })
    .strict()

export default InboxLabelArgsSchema
