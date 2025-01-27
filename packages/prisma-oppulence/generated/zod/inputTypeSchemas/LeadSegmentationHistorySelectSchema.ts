import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationArgsSchema } from '../outputTypeSchemas/LeadSegmentationArgsSchema'

export const LeadSegmentationHistorySelectSchema: z.ZodType<Prisma.LeadSegmentationHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        segmentationId: z.boolean().optional(),
        previousSegments: z.boolean().optional(),
        newSegments: z.boolean().optional(),
        reason: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        segmentation: z.union([z.boolean(), z.lazy(() => LeadSegmentationArgsSchema)]).optional()
    })
    .strict()

export default LeadSegmentationHistorySelectSchema
