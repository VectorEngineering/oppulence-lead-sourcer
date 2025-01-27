import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutWebhooksInputSchema } from './ProjectCreateWithoutWebhooksInputSchema'
import { ProjectUncheckedCreateWithoutWebhooksInputSchema } from './ProjectUncheckedCreateWithoutWebhooksInputSchema'
import { ProjectCreateOrConnectWithoutWebhooksInputSchema } from './ProjectCreateOrConnectWithoutWebhooksInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutWebhooksInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutWebhooksInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutWebhooksInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutWebhooksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutWebhooksInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProjectCreateNestedOneWithoutWebhooksInputSchema
