import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutLinksInputSchema } from './ProjectCreateWithoutLinksInputSchema'
import { ProjectUncheckedCreateWithoutLinksInputSchema } from './ProjectUncheckedCreateWithoutLinksInputSchema'

export const ProjectCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutLinksInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([z.lazy(() => ProjectCreateWithoutLinksInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutLinksInputSchema)])
    })
    .strict()

export default ProjectCreateOrConnectWithoutLinksInputSchema
