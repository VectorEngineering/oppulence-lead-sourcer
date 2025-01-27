import { z } from 'zod'

export const PipelineOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'name',
    'slug',
    'description',
    'icon',
    'color',
    'currency',
    'defaultStageId',
    'pipelineFocus',
    'pipelineSegment',
    'pipelineCategory',
    'targetMarket',
    'salesMethodology',
    'qualificationCriteria',
    'forecastingMethod',
    'complianceLevel',
    'securityTier',
    'visibilityLevel',
    'projectId',
    'createdBy',
    'updatedBy'
])

export default PipelineOrderByRelevanceFieldEnumSchema
