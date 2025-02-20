import { z } from 'zod'

/////////////////////////////////////////
// CONTRACT APPROVAL SCHEMA
/////////////////////////////////////////

export const ContractApprovalSchema = z.object({
    id: z.string().cuid(),
    contractId: z.string(),
    stage: z.string(),
    status: z.string(),
    approverRole: z.string(),
    approverId: z.string().nullish(),
    comments: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type ContractApproval = z.infer<typeof ContractApprovalSchema>

/////////////////////////////////////////
// CONTRACT APPROVAL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ContractApprovalOptionalDefaultsSchema = ContractApprovalSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ContractApprovalOptionalDefaults = z.infer<typeof ContractApprovalOptionalDefaultsSchema>

export default ContractApprovalSchema
