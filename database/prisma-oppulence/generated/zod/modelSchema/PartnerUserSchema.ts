import { z } from 'zod'
import { PartnerRoleSchema } from '../inputTypeSchemas/PartnerRoleSchema'

/////////////////////////////////////////
// PARTNER USER SCHEMA
/////////////////////////////////////////

export const PartnerUserSchema = z.object({
    role: PartnerRoleSchema,
    id: z.string().cuid(),
    userId: z.string(),
    partnerId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type PartnerUser = z.infer<typeof PartnerUserSchema>

/////////////////////////////////////////
// PARTNER USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PartnerUserOptionalDefaultsSchema = PartnerUserSchema.merge(
    z.object({
        role: PartnerRoleSchema.optional(),
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type PartnerUserOptionalDefaults = z.infer<typeof PartnerUserOptionalDefaultsSchema>

export default PartnerUserSchema
