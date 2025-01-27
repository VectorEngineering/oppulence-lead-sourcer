import { z } from 'zod';

export const DomainOrderByRelevanceFieldEnumSchema = z.enum(['id','slug','placeholder','expiredUrl','notFoundUrl','logo','projectId']);

export default DomainOrderByRelevanceFieldEnumSchema;
