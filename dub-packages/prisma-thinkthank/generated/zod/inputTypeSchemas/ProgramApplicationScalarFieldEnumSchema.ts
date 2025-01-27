import { z } from 'zod';

export const ProgramApplicationScalarFieldEnumSchema = z.enum(['id','programId','partnerId','name','email','proposal','website','comments','createdAt','updatedAt']);

export default ProgramApplicationScalarFieldEnumSchema;
