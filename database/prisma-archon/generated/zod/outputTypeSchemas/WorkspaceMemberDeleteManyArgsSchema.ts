import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberWhereInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereInputSchema'

export const WorkspaceMemberDeleteManyArgsSchema: z.ZodType<Prisma.WorkspaceMemberDeleteManyArgs> = z
    .object({
        where: WorkspaceMemberWhereInputSchema.optional()
    })
    .strict()

export default WorkspaceMemberDeleteManyArgsSchema
