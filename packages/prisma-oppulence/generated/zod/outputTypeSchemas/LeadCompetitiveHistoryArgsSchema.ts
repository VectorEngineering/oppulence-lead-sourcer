import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveHistorySelectSchema } from '../inputTypeSchemas/LeadCompetitiveHistorySelectSchema'
import { LeadCompetitiveHistoryIncludeSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryIncludeSchema'

export const LeadCompetitiveHistoryArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadCompetitiveHistorySelectSchema).optional(),
        include: z.lazy(() => LeadCompetitiveHistoryIncludeSchema).optional()
    })
    .strict()

export default LeadCompetitiveHistoryArgsSchema
