import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberScalarWhereInputSchema } from './WorkspaceMemberScalarWhereInputSchema'
import { WorkspaceMemberUpdateManyMutationInputSchema } from './WorkspaceMemberUpdateManyMutationInputSchema'
import { WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInputSchema'

export const WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceMemberScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => WorkspaceMemberUpdateManyMutationInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputSchema
