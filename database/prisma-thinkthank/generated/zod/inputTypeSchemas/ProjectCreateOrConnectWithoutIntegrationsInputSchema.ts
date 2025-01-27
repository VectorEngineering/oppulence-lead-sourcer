import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutIntegrationsInputSchema } from './ProjectCreateWithoutIntegrationsInputSchema'
import { ProjectUncheckedCreateWithoutIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutIntegrationsInputSchema'

export const ProjectCreateOrConnectWithoutIntegrationsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutIntegrationsInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutIntegrationsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutIntegrationsInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutIntegrationsInputSchema
