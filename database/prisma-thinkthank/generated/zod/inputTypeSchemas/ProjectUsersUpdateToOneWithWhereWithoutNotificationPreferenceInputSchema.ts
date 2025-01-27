import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersWhereInputSchema } from './ProjectUsersWhereInputSchema'
import { ProjectUsersUpdateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUpdateWithoutNotificationPreferenceInputSchema'
import { ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema } from './ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema'

export const ProjectUsersUpdateToOneWithWhereWithoutNotificationPreferenceInputSchema: z.ZodType<Prisma.ProjectUsersUpdateToOneWithWhereWithoutNotificationPreferenceInput> =
    z
        .object({
            where: z.lazy(() => ProjectUsersWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProjectUsersUpdateWithoutNotificationPreferenceInputSchema),
                z.lazy(() => ProjectUsersUncheckedUpdateWithoutNotificationPreferenceInputSchema)
            ])
        })
        .strict()

export default ProjectUsersUpdateToOneWithWhereWithoutNotificationPreferenceInputSchema
