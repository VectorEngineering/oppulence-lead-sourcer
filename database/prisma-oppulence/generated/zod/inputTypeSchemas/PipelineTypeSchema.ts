import { z } from 'zod'

export const PipelineTypeSchema = z.enum(['sales', 'recruitment', 'project', 'custom'])

export type PipelineTypeType = `${z.infer<typeof PipelineTypeSchema>}`

export default PipelineTypeSchema
