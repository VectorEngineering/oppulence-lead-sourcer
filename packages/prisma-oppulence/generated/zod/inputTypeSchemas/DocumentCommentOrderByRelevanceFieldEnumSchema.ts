import { z } from 'zod';

export const DocumentCommentOrderByRelevanceFieldEnumSchema = z.enum(['id','documentId','content','type','status','parentCommentId','createdBy','updatedBy']);

export default DocumentCommentOrderByRelevanceFieldEnumSchema;
