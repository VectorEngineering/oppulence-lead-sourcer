import { z } from 'zod'

export const PipelineAccessRuleScalarFieldEnumSchema = z.enum(['id', 'pipelineId', 'roleId', 'userId', 'teamId', 'accessLevel'])

export default PipelineAccessRuleScalarFieldEnumSchema
