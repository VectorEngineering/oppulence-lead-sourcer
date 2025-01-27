import { z } from 'zod';

export const LeadFeedbackScalarFieldEnumSchema = z.enum(['id','leadId','type','source','content','sentiment','score','category','subCategory','tags','requiresFollowUp','followUpAssignee','followUpStatus','followUpNotes','status','resolution','resolvedBy','resolvedAt','createdAt','updatedAt']);

export default LeadFeedbackScalarFieldEnumSchema;
