import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutTransactionCategoryInputSchema } from './ProjectCreateWithoutTransactionCategoryInputSchema'
import { ProjectUncheckedCreateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedCreateWithoutTransactionCategoryInputSchema'

export const ProjectCreateOrConnectWithoutTransactionCategoryInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTransactionCategoryInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProjectCreateWithoutTransactionCategoryInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutTransactionCategoryInputSchema)
            ])
        })
        .strict()

export default ProjectCreateOrConnectWithoutTransactionCategoryInputSchema
