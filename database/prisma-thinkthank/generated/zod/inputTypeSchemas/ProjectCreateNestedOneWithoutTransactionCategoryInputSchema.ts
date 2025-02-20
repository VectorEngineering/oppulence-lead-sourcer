import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutTransactionCategoryInputSchema } from './ProjectCreateWithoutTransactionCategoryInputSchema'
import { ProjectUncheckedCreateWithoutTransactionCategoryInputSchema } from './ProjectUncheckedCreateWithoutTransactionCategoryInputSchema'
import { ProjectCreateOrConnectWithoutTransactionCategoryInputSchema } from './ProjectCreateOrConnectWithoutTransactionCategoryInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutTransactionCategoryInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTransactionCategoryInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutTransactionCategoryInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutTransactionCategoryInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionCategoryInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
        })
        .strict()

export default ProjectCreateNestedOneWithoutTransactionCategoryInputSchema
