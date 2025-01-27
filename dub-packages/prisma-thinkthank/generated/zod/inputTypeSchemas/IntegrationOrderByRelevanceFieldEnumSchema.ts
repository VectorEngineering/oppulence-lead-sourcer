import { z } from 'zod';

export const IntegrationOrderByRelevanceFieldEnumSchema = z.enum(['id','userId','projectId','name','slug','description','readme','developer','website','logo','installUrl']);

export default IntegrationOrderByRelevanceFieldEnumSchema;
