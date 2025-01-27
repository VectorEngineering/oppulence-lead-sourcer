import { z } from 'zod'

/////////////////////////////////////////
// LEAD BUDGET REVISION SCHEMA
/////////////////////////////////////////

export const LeadBudgetRevisionSchema = z.object({
    id: z.string().cuid(),
    budgetId: z.string(),
    previousAmount: z.number(),
    newAmount: z.number(),
    reason: z.string(),
    approvedBy: z.string().nullish(),
    createdAt: z.coerce.date()
})

export type LeadBudgetRevision = z.infer<typeof LeadBudgetRevisionSchema>

/////////////////////////////////////////
// LEAD BUDGET REVISION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadBudgetRevisionOptionalDefaultsSchema = LeadBudgetRevisionSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type LeadBudgetRevisionOptionalDefaults = z.infer<typeof LeadBudgetRevisionOptionalDefaultsSchema>

export default LeadBudgetRevisionSchema
