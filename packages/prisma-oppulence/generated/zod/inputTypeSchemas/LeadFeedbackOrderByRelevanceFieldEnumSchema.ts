import { z } from 'zod'

export const LeadFeedbackOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'source',
    'content',
    'sentiment',
    'category',
    'subCategory',
    'tags',
    'followUpAssignee',
    'followUpStatus',
    'followUpNotes',
    'resolution',
    'resolvedBy'
])

export default LeadFeedbackOrderByRelevanceFieldEnumSchema
