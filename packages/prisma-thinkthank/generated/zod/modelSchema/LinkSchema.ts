import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LINK SCHEMA
/////////////////////////////////////////

export const LinkSchema = z.object({
  id: z.string().cuid(),
  domain: z.string(),
  key: z.string(),
  url: z.string(),
  shortLink: z.string(),
  archived: z.boolean(),
  expiresAt: z.coerce.date().nullish(),
  expiredUrl: z.string().nullish(),
  password: z.string().nullish(),
  trackConversion: z.boolean(),
  proxy: z.boolean(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  image: z.string().nullish(),
  video: z.string().nullish(),
  utm_source: z.string().nullish(),
  utm_medium: z.string().nullish(),
  utm_campaign: z.string().nullish(),
  utm_term: z.string().nullish(),
  utm_content: z.string().nullish(),
  rewrite: z.boolean(),
  doIndex: z.boolean(),
  ios: z.string().nullish(),
  android: z.string().nullish(),
  geo: JsonValueSchema.nullable(),
  userId: z.string().nullish(),
  projectId: z.string().nullish(),
  externalId: z.string().nullish(),
  tenantId: z.string().nullish(),
  publicStats: z.boolean(),
  clicks: z.number().int(),
  lastClicked: z.coerce.date().nullish(),
  leads: z.number().int(),
  sales: z.number().int(),
  saleAmount: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  comments: z.string().nullish(),
  programId: z.string().nullish(),
})

export type Link = z.infer<typeof LinkSchema>

/////////////////////////////////////////
// LINK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LinkOptionalDefaultsSchema = LinkSchema.merge(z.object({
  id: z.string().cuid().optional(),
  archived: z.boolean().optional(),
  trackConversion: z.boolean().optional(),
  proxy: z.boolean().optional(),
  rewrite: z.boolean().optional(),
  doIndex: z.boolean().optional(),
  publicStats: z.boolean().optional(),
  clicks: z.number().int().optional(),
  leads: z.number().int().optional(),
  sales: z.number().int().optional(),
  saleAmount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LinkOptionalDefaults = z.infer<typeof LinkOptionalDefaultsSchema>

export default LinkSchema;
