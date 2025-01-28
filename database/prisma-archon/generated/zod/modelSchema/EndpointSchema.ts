import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// ENDPOINT SCHEMA
/////////////////////////////////////////

export const EndpointSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  name: z.string(),
  schema: JsonValueSchema,
  enabled: z.boolean(),
  webhookEnabled: z.boolean(),
  emailNotify: z.boolean(),
  webhook: z.string().nullish(),
  formEnabled: z.boolean(),
  successUrl: z.string().nullish(),
  failUrl: z.string().nullish(),
  token: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Endpoint = z.infer<typeof EndpointSchema>

/////////////////////////////////////////
// ENDPOINT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EndpointOptionalDefaultsSchema = EndpointSchema.merge(z.object({
  id: z.string().cuid().optional(),
  enabled: z.boolean().optional(),
  webhookEnabled: z.boolean().optional(),
  emailNotify: z.boolean().optional(),
  formEnabled: z.boolean().optional(),
}))

export type EndpointOptionalDefaults = z.infer<typeof EndpointOptionalDefaultsSchema>

export default EndpointSchema;
