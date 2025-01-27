import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// YEAR IN REVIEW SCHEMA
/////////////////////////////////////////

export const YearInReviewSchema = z.object({
  id: z.string().cuid(),
  year: z.number().int(),
  totalLinks: z.number().int(),
  totalClicks: z.number().int(),
  topLinks: JsonValueSchema,
  topCountries: JsonValueSchema,
  workspaceId: z.string(),
  createdAt: z.coerce.date(),
  sentAt: z.coerce.date().nullish(),
})

export type YearInReview = z.infer<typeof YearInReviewSchema>

/////////////////////////////////////////
// YEAR IN REVIEW OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const YearInReviewOptionalDefaultsSchema = YearInReviewSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type YearInReviewOptionalDefaults = z.infer<typeof YearInReviewOptionalDefaultsSchema>

export default YearInReviewSchema;
