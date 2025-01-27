import { z } from 'zod';

export const ContractTemplateScalarFieldEnumSchema = z.enum(['id','name','description','category','type','version','status','language','industry','content','variables','sections','defaultValues','styling','layout','pageSettings','useCount','lastUsedAt','isPublic','reviewRequired','approvalRequired','fileUrl','previewUrl','thumbnailUrl','accessLevel','permissions','validationRules','requiredFields','projectId','createdAt','updatedAt','createdBy','updatedBy','archivedAt']);

export default ContractTemplateScalarFieldEnumSchema;
