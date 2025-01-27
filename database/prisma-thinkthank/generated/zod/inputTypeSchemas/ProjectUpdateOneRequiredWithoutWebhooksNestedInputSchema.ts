import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutWebhooksInputSchema } from './ProjectCreateWithoutWebhooksInputSchema'
import { ProjectUncheckedCreateWithoutWebhooksInputSchema } from './ProjectUncheckedCreateWithoutWebhooksInputSchema'
import { ProjectCreateOrConnectWithoutWebhooksInputSchema } from './ProjectCreateOrConnectWithoutWebhooksInputSchema'
import { ProjectUpsertWithoutWebhooksInputSchema } from './ProjectUpsertWithoutWebhooksInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutWebhooksInputSchema } from './ProjectUpdateToOneWithWhereWithoutWebhooksInputSchema'
import { ProjectUpdateWithoutWebhooksInputSchema } from './ProjectUpdateWithoutWebhooksInputSchema'
import { ProjectUncheckedUpdateWithoutWebhooksInputSchema } from './ProjectUncheckedUpdateWithoutWebhooksInputSchema'

export const ProjectUpdateOneRequiredWithoutWebhooksNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutWebhooksNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutWebhooksInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutWebhooksInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutWebhooksInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutWebhooksInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutWebhooksInputSchema),
                    z.lazy(() => ProjectUpdateWithoutWebhooksInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutWebhooksInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutWebhooksNestedInputSchema
