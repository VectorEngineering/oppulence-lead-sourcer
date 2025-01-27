import { z } from 'zod';

export const LeadScalarFieldEnumSchema = z.enum(['id','name','description','note','internalNotes','reference','amount','probability','weightedAmount','actualAmount','leadSource','stage','verificationStatus','priority','categoryTag','closeDate','nextFollowUp','lastContactDate','contactName','contactEmail','contactPhone','contactTitle','company','industry','pipelineStage','salesRep','territory','winReason','lossReason','date','createdAt','updatedAt','archivedAt','convertedAt','qualifiedAt','closedAt','lastActivity','nextAction','followUpStatus','engagementScore','assignedId','createdBy','updatedBy','projectId','dataConsent','dataRetention','externalId','syncStatus','lastSyncedAt']);

export default LeadScalarFieldEnumSchema;
