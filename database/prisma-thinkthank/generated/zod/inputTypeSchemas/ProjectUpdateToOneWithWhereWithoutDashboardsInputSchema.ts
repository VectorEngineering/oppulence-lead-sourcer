import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutDashboardsInputSchema } from './ProjectUpdateWithoutDashboardsInputSchema'
import { ProjectUncheckedUpdateWithoutDashboardsInputSchema } from './ProjectUncheckedUpdateWithoutDashboardsInputSchema'

export const ProjectUpdateToOneWithWhereWithoutDashboardsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDashboardsInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutDashboardsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutDashboardsInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutDashboardsInputSchema
