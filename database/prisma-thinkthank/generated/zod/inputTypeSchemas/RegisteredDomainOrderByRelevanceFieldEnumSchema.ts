import { z } from 'zod';

export const RegisteredDomainOrderByRelevanceFieldEnumSchema = z.enum(['id','slug','projectId','domainId']);

export default RegisteredDomainOrderByRelevanceFieldEnumSchema;
