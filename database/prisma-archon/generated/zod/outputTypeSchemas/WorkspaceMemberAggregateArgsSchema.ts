import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberWhereInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereInputSchema'
import { WorkspaceMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkspaceMemberOrderByWithRelationInputSchema'
import { WorkspaceMemberWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereUniqueInputSchema'

export const WorkspaceMemberAggregateArgsSchema: z.ZodType<Prisma.WorkspaceMemberAggregateArgs> = z
    .object({
        where: WorkspaceMemberWhereInputSchema.optional(),
        orderBy: z.union([WorkspaceMemberOrderByWithRelationInputSchema.array(), WorkspaceMemberOrderByWithRelationInputSchema]).optional(),
        cursor: WorkspaceMemberWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default WorkspaceMemberAggregateArgsSchema
