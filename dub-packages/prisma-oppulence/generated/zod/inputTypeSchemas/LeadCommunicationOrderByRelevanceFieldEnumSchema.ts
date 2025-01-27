import { z } from 'zod';

export const LeadCommunicationOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','type','direction','subject','content','outcome']);

export default LeadCommunicationOrderByRelevanceFieldEnumSchema;
