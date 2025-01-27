import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberCreateManyInputSchema } from '../inputTypeSchemas/WorkspaceMemberCreateManyInputSchema'

export const WorkspaceMemberCreateManyArgsSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyArgs> = z
    .object({
        data: z.union([WorkspaceMemberCreateManyInputSchema, WorkspaceMemberCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default WorkspaceMemberCreateManyArgsSchema
