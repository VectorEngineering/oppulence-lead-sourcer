import { z } from 'zod';

export const CustomerTagScalarFieldEnumSchema = z.enum(['id','createdAt','customerId','tagId','projectId']);

export default CustomerTagScalarFieldEnumSchema;
