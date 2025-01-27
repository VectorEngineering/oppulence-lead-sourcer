import { z } from 'zod'

export const PipelineStageScalarFieldEnumSchema = z.enum([
    'id',
    'pipelineId',
    'name',
    'description',
    'order',
    'probability',
    'color',
    'icon',
    'isDefault',
    'isFinal',
    'isWon',
    'isLost',
    'autoMoveAfterDays',
    'nextStageId',
    'createdAt',
    'updatedAt'
])

export default PipelineStageScalarFieldEnumSchema
