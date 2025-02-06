import { z } from 'zod';

export const SentEmailScalarFieldEnumSchema = z.enum(['id','type','createdAt','projectId']);

export default SentEmailScalarFieldEnumSchema;
