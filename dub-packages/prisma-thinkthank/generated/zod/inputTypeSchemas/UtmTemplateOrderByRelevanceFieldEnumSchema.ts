import { z } from 'zod';

export const UtmTemplateOrderByRelevanceFieldEnumSchema = z.enum(['id','name','utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref','userId','projectId']);

export default UtmTemplateOrderByRelevanceFieldEnumSchema;
