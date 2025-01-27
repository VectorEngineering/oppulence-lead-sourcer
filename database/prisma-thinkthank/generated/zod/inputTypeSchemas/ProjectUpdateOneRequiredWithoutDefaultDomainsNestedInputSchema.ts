import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutDefaultDomainsInputSchema } from './ProjectCreateWithoutDefaultDomainsInputSchema'
import { ProjectUncheckedCreateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedCreateWithoutDefaultDomainsInputSchema'
import { ProjectCreateOrConnectWithoutDefaultDomainsInputSchema } from './ProjectCreateOrConnectWithoutDefaultDomainsInputSchema'
import { ProjectUpsertWithoutDefaultDomainsInputSchema } from './ProjectUpsertWithoutDefaultDomainsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutDefaultDomainsInputSchema } from './ProjectUpdateToOneWithWhereWithoutDefaultDomainsInputSchema'
import { ProjectUpdateWithoutDefaultDomainsInputSchema } from './ProjectUpdateWithoutDefaultDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema'

export const ProjectUpdateOneRequiredWithoutDefaultDomainsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutDefaultDomainsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutDefaultDomainsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutDefaultDomainsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDefaultDomainsInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutDefaultDomainsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutDefaultDomainsInputSchema),
                    z.lazy(() => ProjectUpdateWithoutDefaultDomainsInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutDefaultDomainsNestedInputSchema
