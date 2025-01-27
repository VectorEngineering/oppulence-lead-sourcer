import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema'
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema'

export const WorkspaceCreateNestedOneWithoutWorkspaceInvitationsInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutWorkspaceInvitationsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => WorkspaceCreateWithoutWorkspaceInvitationsInputSchema),
                    z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceInvitationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutWorkspaceInvitationsInputSchema).optional(),
            connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional()
        })
        .strict()

export default WorkspaceCreateNestedOneWithoutWorkspaceInvitationsInputSchema
