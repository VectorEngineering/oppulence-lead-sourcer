import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutWebhooksInputSchema } from './ProjectCreateWithoutWebhooksInputSchema'
import { ProjectUncheckedCreateWithoutWebhooksInputSchema } from './ProjectUncheckedCreateWithoutWebhooksInputSchema'

export const ProjectCreateOrConnectWithoutWebhooksInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutWebhooksInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutWebhooksInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutWebhooksInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutWebhooksInputSchema
