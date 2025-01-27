import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberUpdateWithoutWorkspaceInputSchema } from './WorkspaceMemberUpdateWithoutWorkspaceInputSchema'
import { WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputSchema'

export const WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => WorkspaceMemberUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputSchema
