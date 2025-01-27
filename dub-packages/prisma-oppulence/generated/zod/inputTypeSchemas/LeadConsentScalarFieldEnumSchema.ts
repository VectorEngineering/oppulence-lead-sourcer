import { z } from 'zod';

export const LeadConsentScalarFieldEnumSchema = z.enum(['id','leadId','type','status','source','ipAddress','timestamp','expiryDate','document']);

export default LeadConsentScalarFieldEnumSchema;
