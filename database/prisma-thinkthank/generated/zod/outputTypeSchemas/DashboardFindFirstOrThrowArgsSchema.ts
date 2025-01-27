import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardIncludeSchema } from '../inputTypeSchemas/DashboardIncludeSchema'
import { DashboardWhereInputSchema } from '../inputTypeSchemas/DashboardWhereInputSchema'
import { DashboardOrderByWithRelationInputSchema } from '../inputTypeSchemas/DashboardOrderByWithRelationInputSchema'
import { DashboardWhereUniqueInputSchema } from '../inputTypeSchemas/DashboardWhereUniqueInputSchema'
import { DashboardScalarFieldEnumSchema } from '../inputTypeSchemas/DashboardScalarFieldEnumSchema'
import { LinkArgsSchema } from './LinkArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DashboardSelectSchema: z.ZodType<Prisma.DashboardSelect> = z
    .object({
        id: z.boolean().optional(),
        linkId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        userId: z.boolean().optional(),
        doIndex: z.boolean().optional(),
        password: z.boolean().optional(),
        showConversions: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export const DashboardFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DashboardFindFirstOrThrowArgs> = z
    .object({
        select: DashboardSelectSchema.optional(),
        include: DashboardIncludeSchema.optional(),
        where: DashboardWhereInputSchema.optional(),
        orderBy: z.union([DashboardOrderByWithRelationInputSchema.array(), DashboardOrderByWithRelationInputSchema]).optional(),
        cursor: DashboardWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([DashboardScalarFieldEnumSchema, DashboardScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default DashboardFindFirstOrThrowArgsSchema
