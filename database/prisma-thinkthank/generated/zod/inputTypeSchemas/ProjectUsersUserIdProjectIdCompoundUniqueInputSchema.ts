import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProjectUsersUserIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectUsersUserIdProjectIdCompoundUniqueInput> = z
    .object({
        userId: z.string(),
        projectId: z.string()
    })
    .strict()

export default ProjectUsersUserIdProjectIdCompoundUniqueInputSchema
