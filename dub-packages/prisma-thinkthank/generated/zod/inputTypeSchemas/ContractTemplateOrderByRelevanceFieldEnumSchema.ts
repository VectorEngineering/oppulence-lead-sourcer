import { z } from 'zod';

export const ContractTemplateOrderByRelevanceFieldEnumSchema = z.enum(['id','name','description','category','type','status','language','industry','content','fileUrl','previewUrl','thumbnailUrl','accessLevel','projectId','createdBy','updatedBy']);

export default ContractTemplateOrderByRelevanceFieldEnumSchema;
