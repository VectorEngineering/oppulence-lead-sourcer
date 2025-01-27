import { z } from 'zod';

export const PipelineAccessRuleOrderByRelevanceFieldEnumSchema = z.enum(['id','pipelineId','roleId','userId','teamId']);

export default PipelineAccessRuleOrderByRelevanceFieldEnumSchema;
