import { z } from 'zod';

/////////////////////////////////////////
// LINK WEBHOOK SCHEMA
/////////////////////////////////////////

export const LinkWebhookSchema = z.object({
  id: z.string().cuid(),
  linkId: z.string(),
  webhookId: z.string(),
})

export type LinkWebhook = z.infer<typeof LinkWebhookSchema>

/////////////////////////////////////////
// LINK WEBHOOK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LinkWebhookOptionalDefaultsSchema = LinkWebhookSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LinkWebhookOptionalDefaults = z.infer<typeof LinkWebhookOptionalDefaultsSchema>

export default LinkWebhookSchema;
