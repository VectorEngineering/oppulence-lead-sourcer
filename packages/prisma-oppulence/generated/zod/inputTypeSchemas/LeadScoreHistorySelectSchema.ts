import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreArgsSchema } from '../outputTypeSchemas/LeadScoreArgsSchema'

export const LeadScoreHistorySelectSchema: z.ZodType<Prisma.LeadScoreHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        leadScoreId: z.boolean().optional(),
        previousScore: z.boolean().optional(),
        newScore: z.boolean().optional(),
        changeReason: z.boolean().optional(),
        timestamp: z.boolean().optional(),
        leadScore: z.union([z.boolean(), z.lazy(() => LeadScoreArgsSchema)]).optional()
    })
    .strict()

export default LeadScoreHistorySelectSchema
