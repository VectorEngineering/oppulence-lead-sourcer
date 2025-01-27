import { z } from 'zod';
import { ProgramResourceTypeSchema } from '../inputTypeSchemas/ProgramResourceTypeSchema'

/////////////////////////////////////////
// PROGRAM RESOURCE SCHEMA
/////////////////////////////////////////

export const ProgramResourceSchema = z.object({
  type: ProgramResourceTypeSchema,
  id: z.string().cuid(),
  programId: z.string(),
  name: z.string(),
  url: z.string(),
  size: z.number().int().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ProgramResource = z.infer<typeof ProgramResourceSchema>

/////////////////////////////////////////
// PROGRAM RESOURCE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProgramResourceOptionalDefaultsSchema = ProgramResourceSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ProgramResourceOptionalDefaults = z.infer<typeof ProgramResourceOptionalDefaultsSchema>

export default ProgramResourceSchema;
