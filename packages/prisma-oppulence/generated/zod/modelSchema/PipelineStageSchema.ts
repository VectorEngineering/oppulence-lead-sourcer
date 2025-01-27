import { z } from 'zod'

/////////////////////////////////////////
// PIPELINE STAGE SCHEMA
/////////////////////////////////////////

export const PipelineStageSchema = z.object({
    id: z.string().cuid(),
    pipelineId: z.string(),
    name: z.string(),
    description: z.string().nullish(),
    order: z.number().int(),
    probability: z.number().nullish(),
    color: z.string().nullish(),
    icon: z.string().nullish(),
    isDefault: z.boolean(),
    isFinal: z.boolean(),
    isWon: z.boolean(),
    isLost: z.boolean(),
    autoMoveAfterDays: z.number().int().nullish(),
    nextStageId: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type PipelineStage = z.infer<typeof PipelineStageSchema>

/////////////////////////////////////////
// PIPELINE STAGE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PipelineStageOptionalDefaultsSchema = PipelineStageSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        isDefault: z.boolean().optional(),
        isFinal: z.boolean().optional(),
        isWon: z.boolean().optional(),
        isLost: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type PipelineStageOptionalDefaults = z.infer<typeof PipelineStageOptionalDefaultsSchema>

export default PipelineStageSchema
