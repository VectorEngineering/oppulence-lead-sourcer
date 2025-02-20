import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceMemberWhereInputSchema } from '../inputTypeSchemas/WorkspaceMemberWhereInputSchema'
import { WorkspaceMemberOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkspaceMemberOrderByWithAggregationInputSchema'
import { WorkspaceMemberScalarFieldEnumSchema } from '../inputTypeSchemas/WorkspaceMemberScalarFieldEnumSchema'
import { WorkspaceMemberScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkspaceMemberScalarWhereWithAggregatesInputSchema'

export const WorkspaceMemberGroupByArgsSchema: z.ZodType<Prisma.WorkspaceMemberGroupByArgs> = z
    .object({
        where: WorkspaceMemberWhereInputSchema.optional(),
        orderBy: z
            .union([WorkspaceMemberOrderByWithAggregationInputSchema.array(), WorkspaceMemberOrderByWithAggregationInputSchema])
            .optional(),
        by: WorkspaceMemberScalarFieldEnumSchema.array(),
        having: WorkspaceMemberScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default WorkspaceMemberGroupByArgsSchema
