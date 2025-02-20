import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { TagArgsSchema } from '../outputTypeSchemas/TagArgsSchema'

export const LinkTagSelectSchema: z.ZodType<Prisma.LinkTagSelect> = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        linkId: z.boolean().optional(),
        tagId: z.boolean().optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional()
    })
    .strict()

export default LinkTagSelectSchema
