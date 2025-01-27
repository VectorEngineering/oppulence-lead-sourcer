import { z } from 'zod';

export const StageRequiredFieldOrderByRelevanceFieldEnumSchema = z.enum(['id','stageId','fieldName','errorMessage']);

export default StageRequiredFieldOrderByRelevanceFieldEnumSchema;
