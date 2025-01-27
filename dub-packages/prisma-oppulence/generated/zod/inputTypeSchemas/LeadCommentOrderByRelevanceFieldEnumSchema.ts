import { z } from 'zod';

export const LeadCommentOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','content','type','visibility','createdBy']);

export default LeadCommentOrderByRelevanceFieldEnumSchema;
