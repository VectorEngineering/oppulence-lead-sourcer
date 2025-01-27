import { z } from 'zod';

export const PipelineIntegrationOrderByRelevanceFieldEnumSchema = z.enum(['id','pipelineId','name','provider','config']);

export default PipelineIntegrationOrderByRelevanceFieldEnumSchema;
