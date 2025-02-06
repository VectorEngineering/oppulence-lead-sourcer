import { z } from 'zod';

export const ProgramApplicationOrderByRelevanceFieldEnumSchema = z.enum(['id','programId','partnerId','name','email','proposal','website','comments']);

export default ProgramApplicationOrderByRelevanceFieldEnumSchema;
