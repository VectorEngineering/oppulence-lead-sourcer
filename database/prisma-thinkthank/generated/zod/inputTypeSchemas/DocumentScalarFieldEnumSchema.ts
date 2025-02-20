import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','body','createdAt','metadata','name','objectId','ownerId','parentId','pathTokens','tag','projectId','title']);

export default DocumentScalarFieldEnumSchema;
