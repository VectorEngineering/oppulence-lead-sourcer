import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereUniqueInputSchema } from './ProjectUsersWhereUniqueInputSchema'
import { ProjectUsersCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersCreateWithoutNotificationPreferenceInputSchema'
import { ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema'

export const ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema: z.ZodType<Prisma.ProjectUsersCreateOrConnectWithoutNotificationPreferenceInput> =
    z
        .object({
            where: z.lazy(() => ProjectUsersWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProjectUsersCreateWithoutNotificationPreferenceInputSchema),
                z.lazy(() => ProjectUsersUncheckedCreateWithoutNotificationPreferenceInputSchema)
            ])
        })
        .strict()

export default ProjectUsersCreateOrConnectWithoutNotificationPreferenceInputSchema
