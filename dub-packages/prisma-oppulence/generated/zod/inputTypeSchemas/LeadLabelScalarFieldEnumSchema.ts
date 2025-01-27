import { z } from 'zod';

export const LeadLabelScalarFieldEnumSchema = z.enum(['id','leadId','name','color','description','createdAt','updatedAt']);

export default LeadLabelScalarFieldEnumSchema;
