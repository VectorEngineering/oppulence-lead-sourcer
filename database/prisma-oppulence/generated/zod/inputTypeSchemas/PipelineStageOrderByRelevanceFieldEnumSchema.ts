import { z } from 'zod'

export const PipelineStageOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'pipelineId',
    'name',
    'description',
    'color',
    'icon',
    'nextStageId'
])

export default PipelineStageOrderByRelevanceFieldEnumSchema
