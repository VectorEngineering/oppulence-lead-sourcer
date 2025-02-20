import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutInstalledIntegrationsInputSchema } from './ProjectCreateWithoutInstalledIntegrationsInputSchema'
import { ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema'
import { ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema } from './ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema'
import { ProjectUpsertWithoutInstalledIntegrationsInputSchema } from './ProjectUpsertWithoutInstalledIntegrationsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema } from './ProjectUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema'
import { ProjectUpdateWithoutInstalledIntegrationsInputSchema } from './ProjectUpdateWithoutInstalledIntegrationsInputSchema'
import { ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema } from './ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema'

export const ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutInstalledIntegrationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutInstalledIntegrationsInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutInstalledIntegrationsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => ProjectUpdateWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutInstalledIntegrationsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema
