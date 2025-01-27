import { z } from 'zod';

export const LeadCommunicationScalarFieldEnumSchema = z.enum(['id','leadId','type','direction','subject','content','outcome','duration','scheduledAt','completedAt','createdAt']);

export default LeadCommunicationScalarFieldEnumSchema;
