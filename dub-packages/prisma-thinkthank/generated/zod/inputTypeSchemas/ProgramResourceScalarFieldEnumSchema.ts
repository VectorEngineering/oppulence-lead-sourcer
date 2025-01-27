import { z } from 'zod';

export const ProgramResourceScalarFieldEnumSchema = z.enum(['id','programId','type','name','url','size','createdAt','updatedAt']);

export default ProgramResourceScalarFieldEnumSchema;
