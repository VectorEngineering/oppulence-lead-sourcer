import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardIncludeSchema } from '../inputTypeSchemas/DashboardIncludeSchema'
import { DashboardUpdateInputSchema } from '../inputTypeSchemas/DashboardUpdateInputSchema'
import { DashboardUncheckedUpdateInputSchema } from '../inputTypeSchemas/DashboardUncheckedUpdateInputSchema'
import { DashboardWhereUniqueInputSchema } from '../inputTypeSchemas/DashboardWhereUniqueInputSchema'
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

export const DashboardUpdateArgsSchema: z.ZodType<Prisma.DashboardUpdateArgs> = z
    .object({
        select: DashboardSelectSchema.optional(),
        include: DashboardIncludeSchema.optional(),
        data: z.union([DashboardUpdateInputSchema, DashboardUncheckedUpdateInputSchema]),
        where: DashboardWhereUniqueInputSchema
    })
    .strict()

export default DashboardUpdateArgsSchema
