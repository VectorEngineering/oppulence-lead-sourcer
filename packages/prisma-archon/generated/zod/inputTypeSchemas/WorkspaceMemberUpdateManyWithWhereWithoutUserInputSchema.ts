import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberScalarWhereInputSchema } from './WorkspaceMemberScalarWhereInputSchema'
import { WorkspaceMemberUpdateManyMutationInputSchema } from './WorkspaceMemberUpdateManyMutationInputSchema'
import { WorkspaceMemberUncheckedUpdateManyWithoutUserInputSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutUserInputSchema'

export const WorkspaceMemberUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyWithWhereWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceMemberScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => WorkspaceMemberUpdateManyMutationInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutUserInputSchema)
            ])
        })
        .strict()

export default WorkspaceMemberUpdateManyWithWhereWithoutUserInputSchema
