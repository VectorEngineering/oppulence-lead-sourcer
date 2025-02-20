import { z } from 'zod'

export const ContractEventOrderByRelevanceFieldEnumSchema = z.enum(['id', 'contractId', 'type', 'description', 'status', 'createdBy'])

export default ContractEventOrderByRelevanceFieldEnumSchema
