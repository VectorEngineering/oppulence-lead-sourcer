import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectInviteIncludeSchema } from '../inputTypeSchemas/ProjectInviteIncludeSchema'
import { ProjectInviteWhereInputSchema } from '../inputTypeSchemas/ProjectInviteWhereInputSchema'
import { ProjectInviteOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectInviteOrderByWithRelationInputSchema'
import { ProjectInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectInviteWhereUniqueInputSchema'
import { ProjectInviteScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectInviteScalarFieldEnumSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectInviteSelectSchema: z.ZodType<Prisma.ProjectInviteSelect> = z
    .object({
        email: z.boolean().optional(),
        expires: z.boolean().optional(),
        projectId: z.boolean().optional(),
        role: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const ProjectInviteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectInviteFindFirstOrThrowArgs> = z
    .object({
        select: ProjectInviteSelectSchema.optional(),
        include: ProjectInviteIncludeSchema.optional(),
        where: ProjectInviteWhereInputSchema.optional(),
        orderBy: z.union([ProjectInviteOrderByWithRelationInputSchema.array(), ProjectInviteOrderByWithRelationInputSchema]).optional(),
        cursor: ProjectInviteWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ProjectInviteScalarFieldEnumSchema, ProjectInviteScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ProjectInviteFindFirstOrThrowArgsSchema
