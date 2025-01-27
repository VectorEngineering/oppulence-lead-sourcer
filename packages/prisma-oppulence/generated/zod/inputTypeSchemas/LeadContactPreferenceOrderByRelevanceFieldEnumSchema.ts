import { z } from 'zod';

export const LeadContactPreferenceOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','method','preferredTime','preferredDays','timezone','notes']);

export default LeadContactPreferenceOrderByRelevanceFieldEnumSchema;
