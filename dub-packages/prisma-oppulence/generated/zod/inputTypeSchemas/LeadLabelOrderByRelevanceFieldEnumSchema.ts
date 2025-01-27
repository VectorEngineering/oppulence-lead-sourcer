import { z } from 'zod';

export const LeadLabelOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','name','color','description']);

export default LeadLabelOrderByRelevanceFieldEnumSchema;
