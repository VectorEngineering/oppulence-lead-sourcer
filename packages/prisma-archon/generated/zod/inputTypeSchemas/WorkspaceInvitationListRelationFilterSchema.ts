import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceInvitationWhereInputSchema } from './WorkspaceInvitationWhereInputSchema'

export const WorkspaceInvitationListRelationFilterSchema: z.ZodType<Prisma.WorkspaceInvitationListRelationFilter> = z
    .object({
        every: z.lazy(() => WorkspaceInvitationWhereInputSchema).optional(),
        some: z.lazy(() => WorkspaceInvitationWhereInputSchema).optional(),
        none: z.lazy(() => WorkspaceInvitationWhereInputSchema).optional()
    })
    .strict()

export default WorkspaceInvitationListRelationFilterSchema
