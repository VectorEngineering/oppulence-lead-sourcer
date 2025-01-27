import { z } from 'zod';

export const AutomationActionScalarFieldEnumSchema = z.enum(['id','automationId','field','value','template']);

export default AutomationActionScalarFieldEnumSchema;
