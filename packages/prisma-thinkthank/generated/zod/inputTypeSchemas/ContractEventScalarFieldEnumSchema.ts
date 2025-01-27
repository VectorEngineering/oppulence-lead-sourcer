import { z } from 'zod'

export const ContractEventScalarFieldEnumSchema = z.enum([
    'id',
    'contractId',
    'type',
    'description',
    'status',
    'dueDate',
    'completedAt',
    'createdAt',
    'updatedAt',
    'createdBy'
])

export default ContractEventScalarFieldEnumSchema
