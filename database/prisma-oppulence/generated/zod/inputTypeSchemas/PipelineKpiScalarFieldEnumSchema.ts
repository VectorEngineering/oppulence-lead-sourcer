import { z } from 'zod'

export const PipelineKpiScalarFieldEnumSchema = z.enum([
    'id',
    'pipelineId',
    'name',
    'type',
    'target',
    'current',
    'unit',
    'description',
    'frequency',
    'calculation',
    'formula',
    'createdAt',
    'updatedAt'
])

export default PipelineKpiScalarFieldEnumSchema
