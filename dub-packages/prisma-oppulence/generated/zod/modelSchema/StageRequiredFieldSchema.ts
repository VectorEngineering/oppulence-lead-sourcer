import { z } from 'zod';

/////////////////////////////////////////
// STAGE REQUIRED FIELD SCHEMA
/////////////////////////////////////////

export const StageRequiredFieldSchema = z.object({
  id: z.string().cuid(),
  stageId: z.string(),
  fieldName: z.string(),
  errorMessage: z.string().nullish(),
})

export type StageRequiredField = z.infer<typeof StageRequiredFieldSchema>

/////////////////////////////////////////
// STAGE REQUIRED FIELD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StageRequiredFieldOptionalDefaultsSchema = StageRequiredFieldSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type StageRequiredFieldOptionalDefaults = z.infer<typeof StageRequiredFieldOptionalDefaultsSchema>

export default StageRequiredFieldSchema;
