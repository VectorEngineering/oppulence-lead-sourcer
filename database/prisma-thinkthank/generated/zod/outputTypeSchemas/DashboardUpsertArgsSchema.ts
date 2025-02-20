import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardIncludeSchema } from '../inputTypeSchemas/DashboardIncludeSchema'
import { DashboardWhereUniqueInputSchema } from '../inputTypeSchemas/DashboardWhereUniqueInputSchema'
import { DashboardCreateInputSchema } from '../inputTypeSchemas/DashboardCreateInputSchema'
import { DashboardUncheckedCreateInputSchema } from '../inputTypeSchemas/DashboardUncheckedCreateInputSchema'
import { DashboardUpdateInputSchema } from '../inputTypeSchemas/DashboardUpdateInputSchema'
import { DashboardUncheckedUpdateInputSchema } from '../inputTypeSchemas/DashboardUncheckedUpdateInputSchema'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
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

export const DashboardUpsertArgsSchema: z.ZodType<Prisma.DashboardUpsertArgs> = z
    .object({
        select: DashboardSelectSchema.optional(),
        include: DashboardIncludeSchema.optional(),
        where: DashboardWhereUniqueInputSchema,
        create: z.union([DashboardCreateInputSchema, DashboardUncheckedCreateInputSchema]),
        update: z.union([DashboardUpdateInputSchema, DashboardUncheckedUpdateInputSchema])
    })
    .strict()

export default DashboardUpsertArgsSchema
