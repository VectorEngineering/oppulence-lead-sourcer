import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutInboxInputSchema } from './ProjectCreateWithoutInboxInputSchema'
import { ProjectUncheckedCreateWithoutInboxInputSchema } from './ProjectUncheckedCreateWithoutInboxInputSchema'

export const ProjectCreateOrConnectWithoutInboxInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutInboxInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([z.lazy(() => ProjectCreateWithoutInboxInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutInboxInputSchema)])
    })
    .strict()

export default ProjectCreateOrConnectWithoutInboxInputSchema
