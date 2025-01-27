import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceInvitationWhereUniqueInputSchema } from './WorkspaceInvitationWhereUniqueInputSchema'
import { WorkspaceInvitationCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateWithoutWorkspaceInputSchema'
import { WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema'

export const WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceInvitationCreateOrConnectWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => WorkspaceInvitationCreateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema
