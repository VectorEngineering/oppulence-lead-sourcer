import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutIntegrationsInputSchema } from './ProjectUpdateWithoutIntegrationsInputSchema'
import { ProjectUncheckedUpdateWithoutIntegrationsInputSchema } from './ProjectUncheckedUpdateWithoutIntegrationsInputSchema'

export const ProjectUpdateToOneWithWhereWithoutIntegrationsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutIntegrationsInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutIntegrationsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutIntegrationsInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutIntegrationsInputSchema
