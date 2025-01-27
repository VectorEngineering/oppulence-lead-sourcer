import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectUsersWhereInputSchema } from '../inputTypeSchemas/ProjectUsersWhereInputSchema'
import { ProjectUsersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectUsersOrderByWithAggregationInputSchema'
import { ProjectUsersScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectUsersScalarFieldEnumSchema'
import { ProjectUsersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectUsersScalarWhereWithAggregatesInputSchema'

export const ProjectUsersGroupByArgsSchema: z.ZodType<Prisma.ProjectUsersGroupByArgs> = z
    .object({
        where: ProjectUsersWhereInputSchema.optional(),
        orderBy: z.union([ProjectUsersOrderByWithAggregationInputSchema.array(), ProjectUsersOrderByWithAggregationInputSchema]).optional(),
        by: ProjectUsersScalarFieldEnumSchema.array(),
        having: ProjectUsersScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProjectUsersGroupByArgsSchema
