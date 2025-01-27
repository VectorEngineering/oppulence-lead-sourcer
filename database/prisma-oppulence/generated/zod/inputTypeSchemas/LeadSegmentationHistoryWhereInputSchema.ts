import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadSegmentationRelationFilterSchema } from './LeadSegmentationRelationFilterSchema'
import { LeadSegmentationWhereInputSchema } from './LeadSegmentationWhereInputSchema'

export const LeadSegmentationHistoryWhereInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadSegmentationHistoryWhereInputSchema), z.lazy(() => LeadSegmentationHistoryWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadSegmentationHistoryWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadSegmentationHistoryWhereInputSchema), z.lazy(() => LeadSegmentationHistoryWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        segmentationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        previousSegments: z.lazy(() => JsonFilterSchema).optional(),
        newSegments: z.lazy(() => JsonFilterSchema).optional(),
        reason: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        segmentation: z
            .union([z.lazy(() => LeadSegmentationRelationFilterSchema), z.lazy(() => LeadSegmentationWhereInputSchema)])
            .optional()
    })
    .strict()

export default LeadSegmentationHistoryWhereInputSchema
