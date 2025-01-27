import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberWhereInputSchema } from './WorkspaceMemberWhereInputSchema'

export const WorkspaceMemberListRelationFilterSchema: z.ZodType<Prisma.WorkspaceMemberListRelationFilter> = z
    .object({
        every: z.lazy(() => WorkspaceMemberWhereInputSchema).optional(),
        some: z.lazy(() => WorkspaceMemberWhereInputSchema).optional(),
        none: z.lazy(() => WorkspaceMemberWhereInputSchema).optional()
    })
    .strict()

export default WorkspaceMemberListRelationFilterSchema
