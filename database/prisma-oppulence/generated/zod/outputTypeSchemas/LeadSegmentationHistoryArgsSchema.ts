import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationHistorySelectSchema } from '../inputTypeSchemas/LeadSegmentationHistorySelectSchema'
import { LeadSegmentationHistoryIncludeSchema } from '../inputTypeSchemas/LeadSegmentationHistoryIncludeSchema'

export const LeadSegmentationHistoryArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadSegmentationHistorySelectSchema).optional(),
        include: z.lazy(() => LeadSegmentationHistoryIncludeSchema).optional()
    })
    .strict()

export default LeadSegmentationHistoryArgsSchema
