import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

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

export default DashboardSelectSchema
