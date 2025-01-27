import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadSegmentationHistoryScalarWhereInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema),
                z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadSegmentationHistoryScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema),
                z.lazy(() => LeadSegmentationHistoryScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        segmentationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        previousSegments: z.lazy(() => JsonFilterSchema).optional(),
        newSegments: z.lazy(() => JsonFilterSchema).optional(),
        reason: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadSegmentationHistoryScalarWhereInputSchema
