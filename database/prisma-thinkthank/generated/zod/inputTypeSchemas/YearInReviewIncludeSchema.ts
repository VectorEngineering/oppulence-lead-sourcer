import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'

export const YearInReviewIncludeSchema: z.ZodType<Prisma.YearInReviewInclude> = z
    .object({
        workspace: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export default YearInReviewIncludeSchema
