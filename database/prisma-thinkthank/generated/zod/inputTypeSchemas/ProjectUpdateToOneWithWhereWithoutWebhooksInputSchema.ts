import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { ProjectUpdateWithoutWebhooksInputSchema } from './ProjectUpdateWithoutWebhooksInputSchema'
import { ProjectUncheckedUpdateWithoutWebhooksInputSchema } from './ProjectUncheckedUpdateWithoutWebhooksInputSchema'

export const ProjectUpdateToOneWithWhereWithoutWebhooksInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutWebhooksInput> = z
    .object({
        where: z.lazy(() => ProjectWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ProjectUpdateWithoutWebhooksInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutWebhooksInputSchema)
        ])
    })
    .strict()

export default ProjectUpdateToOneWithWhereWithoutWebhooksInputSchema
