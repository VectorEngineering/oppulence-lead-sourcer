import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INTEGRATION SCHEMA
/////////////////////////////////////////

export const IntegrationSchema = z.object({
    id: z.string().cuid(),
    userId: z.string().nullish(),
    projectId: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullish(),
    readme: z.string().nullish(),
    developer: z.string(),
    website: z.string(),
    logo: z.string().nullish(),
    screenshots: JsonValueSchema.nullable(),
    verified: z.boolean(),
    installUrl: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type Integration = z.infer<typeof IntegrationSchema>

/////////////////////////////////////////
// INTEGRATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const IntegrationOptionalDefaultsSchema = IntegrationSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        verified: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type IntegrationOptionalDefaults = z.infer<typeof IntegrationOptionalDefaultsSchema>

export default IntegrationSchema
