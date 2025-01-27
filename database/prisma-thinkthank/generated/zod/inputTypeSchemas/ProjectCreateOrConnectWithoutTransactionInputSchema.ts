import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutTransactionInputSchema } from './ProjectCreateWithoutTransactionInputSchema'
import { ProjectUncheckedCreateWithoutTransactionInputSchema } from './ProjectUncheckedCreateWithoutTransactionInputSchema'

export const ProjectCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTransactionInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutTransactionInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutTransactionInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutTransactionInputSchema
