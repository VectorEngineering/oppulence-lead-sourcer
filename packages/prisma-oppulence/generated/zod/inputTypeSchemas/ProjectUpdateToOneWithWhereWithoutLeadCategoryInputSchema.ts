import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutLeadCategoryInputSchema } from './ProjectUpdateWithoutLeadCategoryInputSchema'
import { ProjectUncheckedUpdateWithoutLeadCategoryInputSchema } from './ProjectUncheckedUpdateWithoutLeadCategoryInputSchema'

export const ProjectUpdateToOneWithWhereWithoutLeadCategoryInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutLeadCategoryInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUpdateWithoutLeadCategoryInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutLeadCategoryInputSchema)
            ])
        })
        .strict()

export default ProjectUpdateToOneWithWhereWithoutLeadCategoryInputSchema
