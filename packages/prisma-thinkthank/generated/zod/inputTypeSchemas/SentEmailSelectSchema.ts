import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'

export const SentEmailSelectSchema: z.ZodType<Prisma.SentEmailSelect> = z
    .object({
        id: z.boolean().optional(),
        type: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export default SentEmailSelectSchema
