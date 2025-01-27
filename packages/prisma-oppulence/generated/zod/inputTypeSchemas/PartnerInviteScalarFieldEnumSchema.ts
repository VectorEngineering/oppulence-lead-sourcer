import { z } from 'zod';

export const PartnerInviteScalarFieldEnumSchema = z.enum(['email','expires','partnerId','role','createdAt']);

export default PartnerInviteScalarFieldEnumSchema;
