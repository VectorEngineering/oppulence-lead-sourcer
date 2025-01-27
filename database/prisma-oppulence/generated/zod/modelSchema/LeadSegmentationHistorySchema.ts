import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD SEGMENTATION HISTORY SCHEMA
/////////////////////////////////////////

export const LeadSegmentationHistorySchema = z.object({
    id: z.string().cuid(),
    segmentationId: z.string(),
    previousSegments: JsonValueSchema,
    newSegments: JsonValueSchema,
    reason: z.string(),
    createdAt: z.coerce.date()
})

export type LeadSegmentationHistory = z.infer<typeof LeadSegmentationHistorySchema>

/////////////////////////////////////////
// LEAD SEGMENTATION HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadSegmentationHistoryOptionalDefaultsSchema = LeadSegmentationHistorySchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type LeadSegmentationHistoryOptionalDefaults = z.infer<typeof LeadSegmentationHistoryOptionalDefaultsSchema>

export default LeadSegmentationHistorySchema
