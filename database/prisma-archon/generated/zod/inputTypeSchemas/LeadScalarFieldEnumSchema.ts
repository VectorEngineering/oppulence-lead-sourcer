import { z } from 'zod';

export const LeadScalarFieldEnumSchema = z.enum(['id','endpointId','data','createdAt','updatedAt']);

export default LeadScalarFieldEnumSchema;
