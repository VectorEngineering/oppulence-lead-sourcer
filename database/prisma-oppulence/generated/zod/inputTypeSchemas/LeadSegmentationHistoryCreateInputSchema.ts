import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadSegmentationCreateNestedOneWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateNestedOneWithoutSegmentationHistoryInputSchema'

export const LeadSegmentationHistoryCreateInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        previousSegments: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        newSegments: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        reason: z.string(),
        createdAt: z.coerce.date().optional(),
        segmentation: z.lazy(() => LeadSegmentationCreateNestedOneWithoutSegmentationHistoryInputSchema)
    })
    .strict()

export default LeadSegmentationHistoryCreateInputSchema
