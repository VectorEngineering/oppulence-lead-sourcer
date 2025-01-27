import { z } from 'zod'

export const LeadOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'name',
    'description',
    'note',
    'internalNotes',
    'reference',
    'contactName',
    'contactEmail',
    'contactPhone',
    'contactTitle',
    'company',
    'industry',
    'pipelineStage',
    'salesRep',
    'territory',
    'winReason',
    'lossReason',
    'lastActivity',
    'nextAction',
    'followUpStatus',
    'assignedId',
    'createdBy',
    'updatedBy',
    'projectId',
    'externalId',
    'syncStatus'
])

export default LeadOrderByRelevanceFieldEnumSchema
