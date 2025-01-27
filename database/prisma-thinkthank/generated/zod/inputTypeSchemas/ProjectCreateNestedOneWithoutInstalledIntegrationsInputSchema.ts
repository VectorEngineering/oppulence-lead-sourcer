import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutInstalledIntegrationsInputSchema } from './ProjectCreateWithoutInstalledIntegrationsInputSchema'
import { ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema'
import { ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema } from './ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutInstalledIntegrationsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
        })
        .strict()

export default ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema
