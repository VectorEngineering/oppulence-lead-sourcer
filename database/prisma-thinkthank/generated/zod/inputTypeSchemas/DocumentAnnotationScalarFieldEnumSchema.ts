import { z } from 'zod';

export const DocumentAnnotationScalarFieldEnumSchema = z.enum(['id','documentId','type','content','pageNumber','coordinates','color','createdAt','updatedAt','createdBy']);

export default DocumentAnnotationScalarFieldEnumSchema;
