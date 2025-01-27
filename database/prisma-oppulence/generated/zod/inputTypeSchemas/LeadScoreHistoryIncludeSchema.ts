import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreArgsSchema } from '../outputTypeSchemas/LeadScoreArgsSchema'

export const LeadScoreHistoryIncludeSchema: z.ZodType<Prisma.LeadScoreHistoryInclude> = z
    .object({
        leadScore: z.union([z.boolean(), z.lazy(() => LeadScoreArgsSchema)]).optional()
    })
    .strict()

export default LeadScoreHistoryIncludeSchema
