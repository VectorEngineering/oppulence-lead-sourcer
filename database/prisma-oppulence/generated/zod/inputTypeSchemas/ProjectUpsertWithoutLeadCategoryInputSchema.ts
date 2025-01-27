import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutLeadCategoryInputSchema } from './ProjectUpdateWithoutLeadCategoryInputSchema'
import { ProjectUncheckedUpdateWithoutLeadCategoryInputSchema } from './ProjectUncheckedUpdateWithoutLeadCategoryInputSchema'
import { ProjectCreateWithoutLeadCategoryInputSchema } from './ProjectCreateWithoutLeadCategoryInputSchema'
import { ProjectUncheckedCreateWithoutLeadCategoryInputSchema } from './ProjectUncheckedCreateWithoutLeadCategoryInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutLeadCategoryInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutLeadCategoryInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutLeadCategoryInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutLeadCategoryInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutLeadCategoryInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutLeadCategoryInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutLeadCategoryInputSchema
