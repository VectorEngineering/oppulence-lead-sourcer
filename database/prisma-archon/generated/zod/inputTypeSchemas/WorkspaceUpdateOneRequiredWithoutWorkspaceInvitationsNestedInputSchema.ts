import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceUpsertWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUpsertWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema'
import { WorkspaceUpdateToOneWithWhereWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUpdateToOneWithWhereWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema'

export const WorkspaceUpdateOneRequiredWithoutWorkspaceInvitationsNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutWorkspaceInvitationsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => WorkspaceCreateWithoutWorkspaceInvitationsInputSchema),
                    z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema).optional(),
            upsert: z.lazy(() => WorkspaceUpsertWithoutWorkspaceInvitationsInputSchema).optional(),
            connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutWorkspaceInvitationsInputSchema),
                    z.lazy(() => WorkspaceUpdateWithoutWorkspaceInvitationsInputSchema),
                    z.lazy(() => WorkspaceUncheckedUpdateWithoutWorkspaceInvitationsInputSchema)
                ])
                .optional()
        })
        .strict()

export default WorkspaceUpdateOneRequiredWithoutWorkspaceInvitationsNestedInputSchema
