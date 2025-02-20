import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutDomainsInputSchema } from './ProjectUpdateWithoutDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutDomainsInputSchema } from './ProjectUncheckedUpdateWithoutDomainsInputSchema'

export const ProjectUpdateToOneWithWhereWithoutDomainsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutDomainsInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ProjectUpdateWithoutDomainsInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutDomainsInputSchema)])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutDomainsInputSchema
