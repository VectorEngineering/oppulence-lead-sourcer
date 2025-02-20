import { z } from 'zod';

export const ProgramInviteScalarFieldEnumSchema = z.enum(['id','programId','email','linkId','createdAt']);

export default ProgramInviteScalarFieldEnumSchema;
