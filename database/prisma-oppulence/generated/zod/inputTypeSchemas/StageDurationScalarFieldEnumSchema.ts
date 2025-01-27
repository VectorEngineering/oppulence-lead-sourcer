import { z } from 'zod'

export const StageDurationScalarFieldEnumSchema = z.enum(['id', 'pipelineId', 'stageId', 'expectedDays', 'warningDays', 'criticalDays'])

export default StageDurationScalarFieldEnumSchema
