import { z } from 'zod';

export const AppScalarFieldEnumSchema = z.enum(['id','appId','config','createdAt','createdBy','settings','userId','projectId']);

export default AppScalarFieldEnumSchema;
