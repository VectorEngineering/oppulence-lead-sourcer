import { z } from 'zod';

export const DocumentOrderByRelevanceFieldEnumSchema = z.enum(['id','body','name','objectId','ownerId','parentId','pathTokens','tag','projectId','title']);

export default DocumentOrderByRelevanceFieldEnumSchema;
