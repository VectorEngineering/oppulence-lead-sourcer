import { z } from 'zod';
import { IntegrationTypeSchema } from '../inputTypeSchemas/IntegrationTypeSchema'

/////////////////////////////////////////
// PIPELINE INTEGRATION SCHEMA
/////////////////////////////////////////

export const PipelineIntegrationSchema = z.object({
  type: IntegrationTypeSchema,
  id: z.string().cuid(),
  pipelineId: z.string(),
  name: z.string(),
  provider: z.string(),
  config: z.string(),
  isActive: z.boolean(),
  lastSyncedAt: z.coerce.date().nullish(),
})

export type PipelineIntegration = z.infer<typeof PipelineIntegrationSchema>

/////////////////////////////////////////
// PIPELINE INTEGRATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PipelineIntegrationOptionalDefaultsSchema = PipelineIntegrationSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isActive: z.boolean().optional(),
}))

export type PipelineIntegrationOptionalDefaults = z.infer<typeof PipelineIntegrationOptionalDefaultsSchema>

export default PipelineIntegrationSchema;
