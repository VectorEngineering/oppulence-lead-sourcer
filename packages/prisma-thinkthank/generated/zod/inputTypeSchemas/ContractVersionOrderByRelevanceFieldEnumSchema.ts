import { z } from 'zod'

export const ContractVersionOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'contractId',
    'changeType',
    'content',
    'title',
    'description',
    'changelog',
    'fileUrl',
    'fileType',
    'fileHash',
    'status',
    'reviewStatus',
    'reviewedBy',
    'approvedBy',
    'rejectionReason',
    'signatureStatus',
    'complianceStatus',
    'complianceNotes',
    'lastViewedBy',
    'createdBy',
    'updatedBy',
    'archivedBy'
])

export default ContractVersionOrderByRelevanceFieldEnumSchema
