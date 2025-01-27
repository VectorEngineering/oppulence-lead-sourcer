import { z } from 'zod';

export const LeadDecisionMakerScalarFieldEnumSchema = z.enum(['id','leadId','name','title','email','phone','influence','notes']);

export default LeadDecisionMakerScalarFieldEnumSchema;
