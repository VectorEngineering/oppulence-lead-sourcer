import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { LinkTagFindManyArgsSchema } from '../outputTypeSchemas/LinkTagFindManyArgsSchema'
import { CustomerTagFindManyArgsSchema } from '../outputTypeSchemas/CustomerTagFindManyArgsSchema'
import { LeadFindManyArgsSchema } from '../outputTypeSchemas/LeadFindManyArgsSchema'
import { TagCountOutputTypeArgsSchema } from '../outputTypeSchemas/TagCountOutputTypeArgsSchema'

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkTagFindManyArgsSchema)]).optional(),
        CustomerTag: z.union([z.boolean(), z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
        Lead: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default TagIncludeSchema
