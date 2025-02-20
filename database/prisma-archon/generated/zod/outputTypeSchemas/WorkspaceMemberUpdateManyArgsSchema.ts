import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkspaceMemberUpdateManyMutationInputSchema'
import { WorkspaceMemberUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkspaceMemberUncheckedUpdateManyInputSchema'
import { WorkspaceMemberWhereInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereInputSchema'

export const WorkspaceMemberUpdateManyArgsSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyArgs> = z
    .object({
        data: z.union([WorkspaceMemberUpdateManyMutationInputSchema, WorkspaceMemberUncheckedUpdateManyInputSchema]),
        where: WorkspaceMemberWhereInputSchema.optional()
    })
    .strict()

export default WorkspaceMemberUpdateManyArgsSchema
