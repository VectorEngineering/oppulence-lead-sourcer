import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutLeadCategoryInputSchema } from './ProjectCreateWithoutLeadCategoryInputSchema'
import { ProjectUncheckedCreateWithoutLeadCategoryInputSchema } from './ProjectUncheckedCreateWithoutLeadCategoryInputSchema'

export const ProjectCreateOrConnectWithoutLeadCategoryInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutLeadCategoryInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutLeadCategoryInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutLeadCategoryInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutLeadCategoryInputSchema
