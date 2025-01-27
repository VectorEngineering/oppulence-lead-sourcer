import { z } from 'zod'

export const PipelineKpiOrderByRelevanceFieldEnumSchema = z.enum(['id', 'pipelineId', 'name', 'description', 'formula'])

export default PipelineKpiOrderByRelevanceFieldEnumSchema
