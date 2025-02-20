import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutAppsInputSchema } from './ProjectCreateWithoutAppsInputSchema'
import { ProjectUncheckedCreateWithoutAppsInputSchema } from './ProjectUncheckedCreateWithoutAppsInputSchema'
import { ProjectCreateOrConnectWithoutAppsInputSchema } from './ProjectCreateOrConnectWithoutAppsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutAppsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutAppsInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutAppsInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutAppsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutAppsInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutAppsInputSchema
