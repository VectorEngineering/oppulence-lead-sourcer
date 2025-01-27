import { z } from 'zod'

/////////////////////////////////////////
// DEAL HISTORY SCHEMA
/////////////////////////////////////////

export const DealHistorySchema = z.object({
    id: z.string().cuid(),
    dealId: z.string(),
    field: z.string(),
    oldValue: z.string().nullish(),
    newValue: z.string().nullish(),
    description: z.string().nullish(),
    createdAt: z.coerce.date(),
    createdBy: z.string().nullish()
})

export type DealHistory = z.infer<typeof DealHistorySchema>

/////////////////////////////////////////
// DEAL HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DealHistoryOptionalDefaultsSchema = DealHistorySchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type DealHistoryOptionalDefaults = z.infer<typeof DealHistoryOptionalDefaultsSchema>

export default DealHistorySchema
