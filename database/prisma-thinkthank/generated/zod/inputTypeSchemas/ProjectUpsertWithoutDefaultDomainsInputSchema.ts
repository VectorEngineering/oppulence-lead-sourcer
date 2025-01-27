import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutDefaultDomainsInputSchema } from './ProjectUpdateWithoutDefaultDomainsInputSchema'
import { ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema'
import { ProjectCreateWithoutDefaultDomainsInputSchema } from './ProjectCreateWithoutDefaultDomainsInputSchema'
import { ProjectUncheckedCreateWithoutDefaultDomainsInputSchema } from './ProjectUncheckedCreateWithoutDefaultDomainsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutDefaultDomainsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDefaultDomainsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutDefaultDomainsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutDefaultDomainsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutDefaultDomainsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutDefaultDomainsInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutDefaultDomainsInputSchema
