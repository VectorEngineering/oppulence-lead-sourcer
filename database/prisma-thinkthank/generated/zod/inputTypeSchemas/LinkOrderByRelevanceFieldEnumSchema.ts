import { z } from 'zod';

export const LinkOrderByRelevanceFieldEnumSchema = z.enum(['id','domain','key','url','shortLink','expiredUrl','password','title','description','image','video','utm_source','utm_medium','utm_campaign','utm_term','utm_content','ios','android','userId','projectId','externalId','tenantId','comments','programId']);

export default LinkOrderByRelevanceFieldEnumSchema;
