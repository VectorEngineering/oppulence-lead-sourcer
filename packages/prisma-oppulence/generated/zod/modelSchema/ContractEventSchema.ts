import { z } from 'zod'

/////////////////////////////////////////
// CONTRACT EVENT SCHEMA
/////////////////////////////////////////

export const ContractEventSchema = z.object({
    id: z.string().cuid(),
    contractId: z.string(),
    type: z.string(),
    description: z.string(),
    status: z.string(),
    dueDate: z.coerce.date().nullish(),
    completedAt: z.coerce.date().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdBy: z.string().nullish()
})

export type ContractEvent = z.infer<typeof ContractEventSchema>

/////////////////////////////////////////
// CONTRACT EVENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ContractEventOptionalDefaultsSchema = ContractEventSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ContractEventOptionalDefaults = z.infer<typeof ContractEventOptionalDefaultsSchema>

export default ContractEventSchema
