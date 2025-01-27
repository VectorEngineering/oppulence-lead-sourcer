import { z } from 'zod';

export const LeadHistoryOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','action','description','changes','metadata','createdBy','changeType','source','ipAddress','userAgent']);

export default LeadHistoryOrderByRelevanceFieldEnumSchema;
