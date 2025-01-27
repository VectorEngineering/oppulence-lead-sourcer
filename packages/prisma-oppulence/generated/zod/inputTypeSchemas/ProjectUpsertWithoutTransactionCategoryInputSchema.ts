import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutTransactionCategoryInputSchema } from './ProjectUpdateWithoutTransactionCategoryInputSchema'
import { ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema'
import { ProjectCreateWithoutTransactionCategoryInputSchema } from './ProjectCreateWithoutTransactionCategoryInputSchema'
import { ProjectUncheckedCreateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedCreateWithoutTransactionCategoryInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutTransactionCategoryInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTransactionCategoryInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutTransactionCategoryInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutTransactionCategoryInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutTransactionCategoryInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutTransactionCategoryInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutTransactionCategoryInputSchema
