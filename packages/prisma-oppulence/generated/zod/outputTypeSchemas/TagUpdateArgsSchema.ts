import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagUpdateInputSchema } from '../inputTypeSchemas/TagUpdateInputSchema'
import { TagUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateInputSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { LinkTagFindManyArgsSchema } from './LinkTagFindManyArgsSchema'
import { CustomerTagFindManyArgsSchema } from './CustomerTagFindManyArgsSchema'
import { LeadFindManyArgsSchema } from './LeadFindManyArgsSchema'
import { TagCountOutputTypeArgsSchema } from './TagCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        color: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        context: z.boolean().optional(),
        confidence: z.boolean().optional(),
        metadata: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkTagFindManyArgsSchema)]).optional(),
        CustomerTag: z.union([z.boolean(), z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
        Lead: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z
    .object({
        select: TagSelectSchema.optional(),
        include: TagIncludeSchema.optional(),
        data: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema]),
        where: TagWhereUniqueInputSchema
    })
    .strict()

export default TagUpdateArgsSchema
