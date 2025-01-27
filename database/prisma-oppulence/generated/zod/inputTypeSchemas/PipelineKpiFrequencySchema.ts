import { z } from 'zod'

export const PipelineKpiFrequencySchema = z.enum(['daily', 'weekly', 'monthly'])

export type PipelineKpiFrequencyType = `${z.infer<typeof PipelineKpiFrequencySchema>}`

export default PipelineKpiFrequencySchema
