import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutDashboardsInputSchema } from './ProjectCreateWithoutDashboardsInputSchema'
import { ProjectUncheckedCreateWithoutDashboardsInputSchema } from './ProjectUncheckedCreateWithoutDashboardsInputSchema'
import { ProjectCreateOrConnectWithoutDashboardsInputSchema } from './ProjectCreateOrConnectWithoutDashboardsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutDashboardsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDashboardsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectCreateWithoutDashboardsInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutDashboardsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDashboardsInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutDashboardsInputSchema
