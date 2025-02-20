import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutRegisteredDomainsInputSchema } from './ProjectCreateWithoutRegisteredDomainsInputSchema'
import { ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema'
import { ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema } from './ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema'
import { ProjectUpsertWithoutRegisteredDomainsInputSchema } from './ProjectUpsertWithoutRegisteredDomainsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutRegisteredDomainsInputSchema } from './ProjectUpdateToOneWithWhereWithoutRegisteredDomainsInputSchema'
import { ProjectUpdateWithoutRegisteredDomainsInputSchema } from './ProjectUpdateWithoutRegisteredDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema'

export const ProjectUpdateOneRequiredWithoutRegisteredDomainsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRegisteredDomainsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutRegisteredDomainsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutRegisteredDomainsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutRegisteredDomainsInputSchema),
                    z.lazy(() => ProjectUpdateWithoutRegisteredDomainsInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutRegisteredDomainsNestedInputSchema
