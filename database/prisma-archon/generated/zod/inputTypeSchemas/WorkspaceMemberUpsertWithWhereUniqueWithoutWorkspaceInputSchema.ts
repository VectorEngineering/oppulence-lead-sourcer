import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberUpdateWithoutWorkspaceInputSchema } from './WorkspaceMemberUpdateWithoutWorkspaceInputSchema'
import { WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputSchema'
import { WorkspaceMemberCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateWithoutWorkspaceInputSchema'
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema'

export const WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => WorkspaceMemberUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputSchema)
            ]),
            create: z.union([
                z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputSchema
