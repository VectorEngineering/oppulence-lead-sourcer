import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateWithoutWorkspaceInputSchema'
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema'

export const WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateOrConnectWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema
