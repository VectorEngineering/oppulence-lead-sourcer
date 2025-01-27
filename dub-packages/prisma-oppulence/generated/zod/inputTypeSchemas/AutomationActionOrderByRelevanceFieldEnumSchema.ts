import { z } from 'zod';

export const AutomationActionOrderByRelevanceFieldEnumSchema = z.enum(['id','automationId','field','value','template']);

export default AutomationActionOrderByRelevanceFieldEnumSchema;
