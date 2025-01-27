import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { TagArgsSchema } from '../outputTypeSchemas/TagArgsSchema'

export const LinkTagIncludeSchema: z.ZodType<Prisma.LinkTagInclude> = z
    .object({
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional()
    })
    .strict()

export default LinkTagIncludeSchema
