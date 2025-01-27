import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { DealFindManyArgsSchema } from '../outputTypeSchemas/DealFindManyArgsSchema'
import { LeadFindManyArgsSchema } from '../outputTypeSchemas/LeadFindManyArgsSchema'
import { DocumentCountOutputTypeArgsSchema } from '../outputTypeSchemas/DocumentCountOutputTypeArgsSchema'

export const DocumentIncludeSchema: z.ZodType<Prisma.DocumentInclude> = z
    .object({
        owner: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        Deal: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        Lead: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default DocumentIncludeSchema
