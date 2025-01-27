import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema'
import { WorkspaceMemberUpdateWithoutUserInputSchema } from './WorkspaceMemberUpdateWithoutUserInputSchema'
import { WorkspaceMemberUncheckedUpdateWithoutUserInputSchema } from './WorkspaceMemberUncheckedUpdateWithoutUserInputSchema'

export const WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => WorkspaceMemberUpdateWithoutUserInputSchema),
                z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutUserInputSchema)
            ])
        })
        .strict()

export default WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputSchema
