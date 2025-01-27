import { z } from 'zod';

export const RestrictedTokenOrderByRelevanceFieldEnumSchema = z.enum(['id','name','hashedKey','partialKey','scopes','userId','projectId','installationId']);

export default RestrictedTokenOrderByRelevanceFieldEnumSchema;
