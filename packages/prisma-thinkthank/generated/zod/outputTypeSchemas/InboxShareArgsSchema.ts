import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxShareSelectSchema } from '../inputTypeSchemas/InboxShareSelectSchema'
import { InboxShareIncludeSchema } from '../inputTypeSchemas/InboxShareIncludeSchema'

export const InboxShareArgsSchema: z.ZodType<Prisma.InboxShareDefaultArgs> = z
    .object({
        select: z.lazy(() => InboxShareSelectSchema).optional(),
        include: z.lazy(() => InboxShareIncludeSchema).optional()
    })
    .strict()

export default InboxShareArgsSchema
