import { z } from 'zod';

export const LeadRiskScalarFieldEnumSchema = z.enum(['id','leadId','category','description','impact','probability','mitigation','status']);

export default LeadRiskScalarFieldEnumSchema;
