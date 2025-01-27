import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutLinksInputSchema } from './ProjectUpdateWithoutLinksInputSchema'
import { ProjectUncheckedUpdateWithoutLinksInputSchema } from './ProjectUncheckedUpdateWithoutLinksInputSchema'
import { ProjectCreateWithoutLinksInputSchema } from './ProjectCreateWithoutLinksInputSchema'
import { ProjectUncheckedCreateWithoutLinksInputSchema } from './ProjectUncheckedCreateWithoutLinksInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutLinksInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutLinksInput> = z
    .object({
        update: z.union([z.lazy(() => ProjectUpdateWithoutLinksInputSchema), z.lazy(() => ProjectUncheckedUpdateWithoutLinksInputSchema)]),
        create: z.union([z.lazy(() => ProjectCreateWithoutLinksInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutLinksInputSchema)]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutLinksInputSchema
