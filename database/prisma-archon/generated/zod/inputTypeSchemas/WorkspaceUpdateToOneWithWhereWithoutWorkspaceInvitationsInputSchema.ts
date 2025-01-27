import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema'
import { WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema'

export const WorkspaceUpdateToOneWithWhereWithoutWorkspaceInvitationsInputSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutWorkspaceInvitationsInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema),
                z.lazy(() => WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema)
            ])
        })
        .strict()

export default WorkspaceUpdateToOneWithWhereWithoutWorkspaceInvitationsInputSchema
