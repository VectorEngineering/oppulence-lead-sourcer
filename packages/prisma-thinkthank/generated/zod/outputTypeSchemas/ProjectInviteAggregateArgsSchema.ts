import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectInviteWhereInputSchema } from '../inputTypeSchemas/ProjectInviteWhereInputSchema'
import { ProjectInviteOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectInviteOrderByWithRelationInputSchema'
import { ProjectInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectInviteWhereUniqueInputSchema'

export const ProjectInviteAggregateArgsSchema: z.ZodType<Prisma.ProjectInviteAggregateArgs> = z
    .object({
        where: ProjectInviteWhereInputSchema.optional(),
        orderBy: z.union([ProjectInviteOrderByWithRelationInputSchema.array(), ProjectInviteOrderByWithRelationInputSchema]).optional(),
        cursor: ProjectInviteWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProjectInviteAggregateArgsSchema
