import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutIntegrationsInputSchema } from './ProjectCreateWithoutIntegrationsInputSchema'
import { ProjectUncheckedCreateWithoutIntegrationsInputSchema } from './ProjectUncheckedCreateWithoutIntegrationsInputSchema'
import { ProjectCreateOrConnectWithoutIntegrationsInputSchema } from './ProjectCreateOrConnectWithoutIntegrationsInputSchema'
import { ProjectUpsertWithoutIntegrationsInputSchema } from './ProjectUpsertWithoutIntegrationsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutIntegrationsInputSchema } from './ProjectUpdateToOneWithWhereWithoutIntegrationsInputSchema'
import { ProjectUpdateWithoutIntegrationsInputSchema } from './ProjectUpdateWithoutIntegrationsInputSchema'
import { ProjectUncheckedUpdateWithoutIntegrationsInputSchema } from './ProjectUncheckedUpdateWithoutIntegrationsInputSchema'

export const ProjectUpdateOneRequiredWithoutIntegrationsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutIntegrationsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutIntegrationsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutIntegrationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutIntegrationsInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutIntegrationsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutIntegrationsInputSchema),
                    z.lazy(() => ProjectUpdateWithoutIntegrationsInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutIntegrationsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutIntegrationsNestedInputSchema
