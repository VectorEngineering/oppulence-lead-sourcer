import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema'

export const WorkspaceListRelationFilterSchema: z.ZodType<Prisma.WorkspaceListRelationFilter> = z
    .object({
        every: z.lazy(() => WorkspaceWhereInputSchema).optional(),
        some: z.lazy(() => WorkspaceWhereInputSchema).optional(),
        none: z.lazy(() => WorkspaceWhereInputSchema).optional()
    })
    .strict()

export default WorkspaceListRelationFilterSchema
