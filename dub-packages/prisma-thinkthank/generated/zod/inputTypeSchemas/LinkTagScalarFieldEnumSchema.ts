import { z } from 'zod';

export const LinkTagScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','linkId','tagId']);

export default LinkTagScalarFieldEnumSchema;
