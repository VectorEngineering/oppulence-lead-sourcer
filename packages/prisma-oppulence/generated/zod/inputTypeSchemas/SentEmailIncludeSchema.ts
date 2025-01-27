import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'

export const SentEmailIncludeSchema: z.ZodType<Prisma.SentEmailInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export default SentEmailIncludeSchema
