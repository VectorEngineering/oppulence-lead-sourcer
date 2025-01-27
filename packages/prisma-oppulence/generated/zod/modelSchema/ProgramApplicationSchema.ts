import { z } from 'zod';

/////////////////////////////////////////
// PROGRAM APPLICATION SCHEMA
/////////////////////////////////////////

export const ProgramApplicationSchema = z.object({
  id: z.string().cuid(),
  programId: z.string(),
  partnerId: z.string().nullish(),
  name: z.string(),
  email: z.string(),
  proposal: z.string().nullish(),
  website: z.string().nullish(),
  comments: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ProgramApplication = z.infer<typeof ProgramApplicationSchema>

/////////////////////////////////////////
// PROGRAM APPLICATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProgramApplicationOptionalDefaultsSchema = ProgramApplicationSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ProgramApplicationOptionalDefaults = z.infer<typeof ProgramApplicationOptionalDefaultsSchema>

export default ProgramApplicationSchema;
