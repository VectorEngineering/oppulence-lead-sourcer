import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutRegisteredDomainsInputSchema } from './ProjectCreateWithoutRegisteredDomainsInputSchema'
import { ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema'

export const ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRegisteredDomainsInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProjectCreateWithoutRegisteredDomainsInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutRegisteredDomainsInputSchema)
            ])
        })
        .strict()

export default ProjectCreateOrConnectWithoutRegisteredDomainsInputSchema
