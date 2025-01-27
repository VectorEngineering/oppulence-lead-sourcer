import { z } from 'zod'

export const ContractApprovalOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'contractId',
    'stage',
    'status',
    'approverRole',
    'approverId',
    'comments'
])

export default ContractApprovalOrderByRelevanceFieldEnumSchema
