import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ProgramTypeSchema } from '../inputTypeSchemas/ProgramTypeSchema'
import { CommissionTypeSchema } from '../inputTypeSchemas/CommissionTypeSchema'
import { CommissionIntervalSchema } from '../inputTypeSchemas/CommissionIntervalSchema'

/////////////////////////////////////////
// PROGRAM SCHEMA
/////////////////////////////////////////

export const ProgramSchema = z.object({
  type: ProgramTypeSchema,
  commissionType: CommissionTypeSchema,
  commissionInterval: CommissionIntervalSchema.nullish(),
  id: z.string().cuid(),
  workspaceId: z.string(),
  name: z.string(),
  slug: z.string(),
  logo: z.string().nullish(),
  wordmark: z.string().nullish(),
  brandColor: z.string().nullish(),
  domain: z.string().nullish(),
  url: z.string().nullish(),
  cookieLength: z.number().int(),
  commissionAmount: z.number().int(),
  commissionDuration: z.number().int().nullish(),
  landerData: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Program = z.infer<typeof ProgramSchema>

/////////////////////////////////////////
// PROGRAM OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProgramOptionalDefaultsSchema = ProgramSchema.merge(z.object({
  type: ProgramTypeSchema.optional(),
  commissionType: CommissionTypeSchema.optional(),
  id: z.string().cuid().optional(),
  cookieLength: z.number().int().optional(),
  commissionAmount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ProgramOptionalDefaults = z.infer<typeof ProgramOptionalDefaultsSchema>

export default ProgramSchema;
