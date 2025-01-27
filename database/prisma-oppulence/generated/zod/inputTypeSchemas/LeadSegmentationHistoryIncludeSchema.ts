import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationArgsSchema } from '../outputTypeSchemas/LeadSegmentationArgsSchema'

export const LeadSegmentationHistoryIncludeSchema: z.ZodType<Prisma.LeadSegmentationHistoryInclude> = z
    .object({
        segmentation: z.union([z.boolean(), z.lazy(() => LeadSegmentationArgsSchema)]).optional()
    })
    .strict()

export default LeadSegmentationHistoryIncludeSchema
