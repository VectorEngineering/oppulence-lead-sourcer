import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { LeadFindManyArgsSchema } from '../outputTypeSchemas/LeadFindManyArgsSchema'
import { LeadCategoryCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadCategoryCountOutputTypeArgsSchema'

export const LeadCategoryIncludeSchema: z.ZodType<Prisma.LeadCategoryInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        leads: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadCategoryCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default LeadCategoryIncludeSchema
