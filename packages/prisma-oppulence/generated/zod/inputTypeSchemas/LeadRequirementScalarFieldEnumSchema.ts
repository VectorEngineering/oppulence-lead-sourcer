import { z } from 'zod';

export const LeadRequirementScalarFieldEnumSchema = z.enum(['id','leadId','category','priority','description','status','notes']);

export default LeadRequirementScalarFieldEnumSchema;
