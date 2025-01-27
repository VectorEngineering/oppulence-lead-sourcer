import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutRegisteredDomainsInputSchema } from './ProjectUpdateWithoutRegisteredDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema } from './ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema'

export const ProjectUpdateToOneWithWhereWithoutRegisteredDomainsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutRegisteredDomainsInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutRegisteredDomainsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutRegisteredDomainsInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutRegisteredDomainsInputSchema
