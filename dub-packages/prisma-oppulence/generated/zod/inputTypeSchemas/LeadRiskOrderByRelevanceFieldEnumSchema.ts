import { z } from 'zod';

export const LeadRiskOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','category','description','impact','probability','mitigation','status']);

export default LeadRiskOrderByRelevanceFieldEnumSchema;
