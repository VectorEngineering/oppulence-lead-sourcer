import { z } from 'zod';

export const LeadConsentOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','type','source','ipAddress','document']);

export default LeadConsentOrderByRelevanceFieldEnumSchema;
