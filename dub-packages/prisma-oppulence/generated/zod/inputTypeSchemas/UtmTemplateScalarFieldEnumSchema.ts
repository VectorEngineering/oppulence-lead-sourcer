import { z } from 'zod';

export const UtmTemplateScalarFieldEnumSchema = z.enum(['id','name','utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref','userId','projectId','createdAt','updatedAt']);

export default UtmTemplateScalarFieldEnumSchema;
