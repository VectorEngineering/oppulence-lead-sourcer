import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutDomainsInputSchema } from './ProjectUpdateWithoutDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutDomainsInputSchema } from './ProjectUncheckedUpdateWithoutDomainsInputSchema'
import { ProjectCreateWithoutDomainsInputSchema } from './ProjectCreateWithoutDomainsInputSchema'
import { ProjectUncheckedCreateWithoutDomainsInputSchema } from './ProjectUncheckedCreateWithoutDomainsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutDomainsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDomainsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutDomainsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutDomainsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutDomainsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutDomainsInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutDomainsInputSchema
