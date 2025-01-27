import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutLeadCategoryInputSchema } from './ProjectCreateWithoutLeadCategoryInputSchema'
import { ProjectUncheckedCreateWithoutLeadCategoryInputSchema } from './ProjectUncheckedCreateWithoutLeadCategoryInputSchema'
import { ProjectCreateOrConnectWithoutLeadCategoryInputSchema } from './ProjectCreateOrConnectWithoutLeadCategoryInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutLeadCategoryInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutLeadCategoryInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProjectCreateWithoutLeadCategoryInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutLeadCategoryInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutLeadCategoryInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutLeadCategoryInputSchema
