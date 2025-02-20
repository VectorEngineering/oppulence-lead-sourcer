import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutInvoicesInputSchema } from './ProjectCreateWithoutInvoicesInputSchema'
import { ProjectUncheckedCreateWithoutInvoicesInputSchema } from './ProjectUncheckedCreateWithoutInvoicesInputSchema'

export const ProjectCreateOrConnectWithoutInvoicesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutInvoicesInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutInvoicesInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutInvoicesInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutInvoicesInputSchema
