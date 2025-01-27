import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxSelectSchema } from '../inputTypeSchemas/InboxSelectSchema'
import { InboxIncludeSchema } from '../inputTypeSchemas/InboxIncludeSchema'

export const InboxArgsSchema: z.ZodType<Prisma.InboxDefaultArgs> = z
    .object({
        select: z.lazy(() => InboxSelectSchema).optional(),
        include: z.lazy(() => InboxIncludeSchema).optional()
    })
    .strict()

export default InboxArgsSchema
