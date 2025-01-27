import { z } from 'zod';
import { DealActivityTypeSchema } from '../inputTypeSchemas/DealActivityTypeSchema'

/////////////////////////////////////////
// DEAL ACTIVITY SCHEMA
/////////////////////////////////////////

export const DealActivitySchema = z.object({
  type: DealActivityTypeSchema,
  id: z.string().cuid(),
  dealId: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  outcome: z.string().nullish(),
  duration: z.number().int().nullish(),
  scheduledAt: z.coerce.date().nullish(),
  completedAt: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
})

export type DealActivity = z.infer<typeof DealActivitySchema>

/////////////////////////////////////////
// DEAL ACTIVITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DealActivityOptionalDefaultsSchema = DealActivitySchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DealActivityOptionalDefaults = z.infer<typeof DealActivityOptionalDefaultsSchema>

export default DealActivitySchema;
