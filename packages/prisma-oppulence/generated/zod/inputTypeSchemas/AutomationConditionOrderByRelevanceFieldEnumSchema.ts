import { z } from 'zod';

export const AutomationConditionOrderByRelevanceFieldEnumSchema = z.enum(['id','automationId','field','operator','value']);

export default AutomationConditionOrderByRelevanceFieldEnumSchema;
