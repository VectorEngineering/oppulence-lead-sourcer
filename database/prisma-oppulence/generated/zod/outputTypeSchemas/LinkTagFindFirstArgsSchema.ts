import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkTagIncludeSchema } from '../inputTypeSchemas/LinkTagIncludeSchema'
import { LinkTagWhereInputSchema } from '../inputTypeSchemas/LinkTagWhereInputSchema'
import { LinkTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/LinkTagOrderByWithRelationInputSchema'
import { LinkTagWhereUniqueInputSchema } from '../inputTypeSchemas/LinkTagWhereUniqueInputSchema'
import { LinkTagScalarFieldEnumSchema } from '../inputTypeSchemas/LinkTagScalarFieldEnumSchema'
import { LinkArgsSchema } from './LinkArgsSchema'
import { TagArgsSchema } from './TagArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const LinkTagFindFirstArgsSchema: z.ZodType<Prisma.LinkTagFindFirstArgs> = z
    .object({
        select: LinkTagSelectSchema.optional(),
        include: LinkTagIncludeSchema.optional(),
        where: LinkTagWhereInputSchema.optional(),
        orderBy: z.union([LinkTagOrderByWithRelationInputSchema.array(), LinkTagOrderByWithRelationInputSchema]).optional(),
        cursor: LinkTagWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LinkTagScalarFieldEnumSchema, LinkTagScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LinkTagFindFirstArgsSchema
