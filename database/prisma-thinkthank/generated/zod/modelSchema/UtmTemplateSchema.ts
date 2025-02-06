import { z } from 'zod';

/////////////////////////////////////////
// UTM TEMPLATE SCHEMA
/////////////////////////////////////////

export const UtmTemplateSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  utm_source: z.string().nullish(),
  utm_medium: z.string().nullish(),
  utm_campaign: z.string().nullish(),
  utm_term: z.string().nullish(),
  utm_content: z.string().nullish(),
  ref: z.string().nullish(),
  userId: z.string().nullish(),
  projectId: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UtmTemplate = z.infer<typeof UtmTemplateSchema>

/////////////////////////////////////////
// UTM TEMPLATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UtmTemplateOptionalDefaultsSchema = UtmTemplateSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UtmTemplateOptionalDefaults = z.infer<typeof UtmTemplateOptionalDefaultsSchema>

export default UtmTemplateSchema;
