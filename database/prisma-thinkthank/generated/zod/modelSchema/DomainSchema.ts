import { z } from 'zod'

/////////////////////////////////////////
// DOMAIN SCHEMA
/////////////////////////////////////////

export const DomainSchema = z.object({
    id: z.string().cuid(),
    slug: z.string(),
    verified: z.boolean(),
    placeholder: z.string().nullish(),
    expiredUrl: z.string().nullish(),
    notFoundUrl: z.string().nullish(),
    primary: z.boolean(),
    archived: z.boolean(),
    lastChecked: z.coerce.date(),
    logo: z.string().nullish(),
    projectId: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type Domain = z.infer<typeof DomainSchema>

/////////////////////////////////////////
// DOMAIN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DomainOptionalDefaultsSchema = DomainSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        verified: z.boolean().optional(),
        primary: z.boolean().optional(),
        archived: z.boolean().optional(),
        lastChecked: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type DomainOptionalDefaults = z.infer<typeof DomainOptionalDefaultsSchema>

export default DomainSchema
