import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkTagSelectSchema } from '../inputTypeSchemas/LinkTagSelectSchema'
import { LinkTagIncludeSchema } from '../inputTypeSchemas/LinkTagIncludeSchema'

export const LinkTagArgsSchema: z.ZodType<Prisma.LinkTagDefaultArgs> = z
    .object({
        select: z.lazy(() => LinkTagSelectSchema).optional(),
        include: z.lazy(() => LinkTagIncludeSchema).optional()
    })
    .strict()

export default LinkTagArgsSchema
