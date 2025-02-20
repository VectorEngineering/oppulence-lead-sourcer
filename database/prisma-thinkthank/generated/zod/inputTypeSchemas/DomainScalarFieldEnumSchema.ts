import { z } from 'zod';

export const DomainScalarFieldEnumSchema = z.enum(['id','slug','verified','placeholder','expiredUrl','notFoundUrl','primary','archived','lastChecked','logo','projectId','createdAt','updatedAt']);

export default DomainScalarFieldEnumSchema;
