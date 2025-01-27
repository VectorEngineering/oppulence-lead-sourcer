import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INSTALLED INTEGRATION SCHEMA
/////////////////////////////////////////

export const InstalledIntegrationSchema = z.object({
    id: z.string().cuid(),
    userId: z.string(),
    integrationId: z.string(),
    projectId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    credentials: JsonValueSchema.nullable()
})

export type InstalledIntegration = z.infer<typeof InstalledIntegrationSchema>

/////////////////////////////////////////
// INSTALLED INTEGRATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InstalledIntegrationOptionalDefaultsSchema = InstalledIntegrationSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type InstalledIntegrationOptionalDefaults = z.infer<typeof InstalledIntegrationOptionalDefaultsSchema>

export default InstalledIntegrationSchema
