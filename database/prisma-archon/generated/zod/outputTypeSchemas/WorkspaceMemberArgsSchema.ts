import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberSelectSchema } from '../inputTypeSchemas/WorkspaceMemberSelectSchema'
import { WorkspaceMemberIncludeSchema } from '../inputTypeSchemas/WorkspaceMemberIncludeSchema'

export const WorkspaceMemberArgsSchema: z.ZodType<Prisma.WorkspaceMemberDefaultArgs> = z
    .object({
        select: z.lazy(() => WorkspaceMemberSelectSchema).optional(),
        include: z.lazy(() => WorkspaceMemberIncludeSchema).optional()
    })
    .strict()

export default WorkspaceMemberArgsSchema
