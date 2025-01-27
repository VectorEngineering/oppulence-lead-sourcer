import { z } from 'zod';

/////////////////////////////////////////
// STAGE DURATION SCHEMA
/////////////////////////////////////////

export const StageDurationSchema = z.object({
  id: z.string().cuid(),
  pipelineId: z.string(),
  stageId: z.string(),
  expectedDays: z.number().int(),
  warningDays: z.number().int().nullish(),
  criticalDays: z.number().int().nullish(),
})

export type StageDuration = z.infer<typeof StageDurationSchema>

/////////////////////////////////////////
// STAGE DURATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StageDurationOptionalDefaultsSchema = StageDurationSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type StageDurationOptionalDefaults = z.infer<typeof StageDurationOptionalDefaultsSchema>

export default StageDurationSchema;
