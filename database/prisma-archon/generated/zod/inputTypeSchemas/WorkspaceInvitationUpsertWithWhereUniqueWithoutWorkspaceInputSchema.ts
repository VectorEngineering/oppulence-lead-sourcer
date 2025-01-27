import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceInvitationWhereUniqueInputSchema } from './WorkspaceInvitationWhereUniqueInputSchema'
import { WorkspaceInvitationUpdateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUpdateWithoutWorkspaceInputSchema'
import { WorkspaceInvitationUncheckedUpdateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedUpdateWithoutWorkspaceInputSchema'
import { WorkspaceInvitationCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateWithoutWorkspaceInputSchema'
import { WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema'

export const WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => WorkspaceInvitationUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceInvitationUncheckedUpdateWithoutWorkspaceInputSchema)
            ]),
            create: z.union([
                z.lazy(() => WorkspaceInvitationCreateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInputSchema
