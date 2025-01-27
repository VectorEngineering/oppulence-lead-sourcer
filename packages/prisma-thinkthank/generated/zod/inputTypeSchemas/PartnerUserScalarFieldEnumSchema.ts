import { z } from 'zod';

export const PartnerUserScalarFieldEnumSchema = z.enum(['id','role','userId','partnerId','createdAt','updatedAt']);

export default PartnerUserScalarFieldEnumSchema;
