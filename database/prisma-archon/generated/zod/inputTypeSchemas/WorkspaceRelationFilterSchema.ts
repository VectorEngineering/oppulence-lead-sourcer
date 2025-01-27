import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema'

export const WorkspaceRelationFilterSchema: z.ZodType<Prisma.WorkspaceRelationFilter> = z
    .object({
        is: z.lazy(() => WorkspaceWhereInputSchema).optional(),
        isNot: z.lazy(() => WorkspaceWhereInputSchema).optional()
    })
    .strict()

export default WorkspaceRelationFilterSchema
