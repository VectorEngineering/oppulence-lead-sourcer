import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutIntegrationsInputSchema } from './ProjectUpdateWithoutIntegrationsInputSchema'
import { ProjectUncheckedUpdateWithoutIntegrationsInputSchema } from './ProjectUncheckedUpdateWithoutIntegrationsInputSchema'
import { ProjectCreateWithoutIntegrationsInputSchema } from './ProjectCreateWithoutIntegrationsInputSchema'
import { ProjectUncheckedCreateWithoutIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutIntegrationsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutIntegrationsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutIntegrationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutIntegrationsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutIntegrationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutIntegrationsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutIntegrationsInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutIntegrationsInputSchema
