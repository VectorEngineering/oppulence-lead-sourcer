import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutAppsInputSchema } from './ProjectUpdateWithoutAppsInputSchema'
import { ProjectUncheckedUpdateWithoutAppsInputSchema } from './ProjectUncheckedUpdateWithoutAppsInputSchema'
import { ProjectCreateWithoutAppsInputSchema } from './ProjectCreateWithoutAppsInputSchema'
import { ProjectUncheckedCreateWithoutAppsInputSchema } from './ProjectUncheckedCreateWithoutAppsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutAppsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutAppsInput> = z
    .object({
        update: z.union([z.lazy(() => ProjectUpdateWithoutAppsInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutAppsInputSchema)]),
        create: z.union([z.lazy(() => ProjectCreateWithoutAppsInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutAppsInputSchema)]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutAppsInputSchema
