import { z } from 'zod'

/////////////////////////////////////////
// CUSTOMER TAG SCHEMA
/////////////////////////////////////////

export const CustomerTagSchema = z.object({
    id: z.string().cuid(),
    createdAt: z.coerce.date(),
    customerId: z.string(),
    tagId: z.string(),
    projectId: z.string()
})

export type CustomerTag = z.infer<typeof CustomerTagSchema>

/////////////////////////////////////////
// CUSTOMER TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CustomerTagOptionalDefaultsSchema = CustomerTagSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type CustomerTagOptionalDefaults = z.infer<typeof CustomerTagOptionalDefaultsSchema>

export default CustomerTagSchema
