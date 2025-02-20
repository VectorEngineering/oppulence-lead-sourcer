import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutInstalledIntegrationsInputSchema } from './ProjectUpdateWithoutInstalledIntegrationsInputSchema'
import { ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema'
import { ProjectCreateWithoutInstalledIntegrationsInputSchema } from './ProjectCreateWithoutInstalledIntegrationsInputSchema'
import { ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutInstalledIntegrationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutInstalledIntegrationsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutInstalledIntegrationsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutInstalledIntegrationsInputSchema
