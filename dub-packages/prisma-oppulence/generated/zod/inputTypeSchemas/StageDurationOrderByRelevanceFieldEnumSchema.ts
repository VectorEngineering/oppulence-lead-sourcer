import { z } from 'zod';

export const StageDurationOrderByRelevanceFieldEnumSchema = z.enum(['id','pipelineId','stageId']);

export default StageDurationOrderByRelevanceFieldEnumSchema;
