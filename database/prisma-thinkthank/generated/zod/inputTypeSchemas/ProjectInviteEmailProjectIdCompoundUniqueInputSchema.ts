import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProjectInviteEmailProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProjectInviteEmailProjectIdCompoundUniqueInput> = z
    .object({
        email: z.string(),
        projectId: z.string()
    })
    .strict()

export default ProjectInviteEmailProjectIdCompoundUniqueInputSchema
