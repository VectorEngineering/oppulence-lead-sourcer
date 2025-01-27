import { z } from 'zod'

export const LeadNurturingScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'program',
    'stage',
    'status',
    'contentViewed',
    'emailsOpened',
    'websiteVisits',
    'engagementScore',
    'responseRate',
    'lastEngagement',
    'currentStep',
    'completedSteps',
    'nextActions',
    'automationFlows',
    'triggers',
    'createdAt',
    'updatedAt'
])

export default LeadNurturingScalarFieldEnumSchema
