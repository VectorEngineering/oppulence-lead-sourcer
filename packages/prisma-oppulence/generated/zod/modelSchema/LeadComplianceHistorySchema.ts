import { z } from 'zod'

/////////////////////////////////////////
// LEAD COMPLIANCE HISTORY SCHEMA
/////////////////////////////////////////

export const LeadComplianceHistorySchema = z.object({
    id: z.string().cuid(),
    complianceAuditId: z.string(),
    action: z.string(),
    status: z.string(),
    notes: z.string(),
    performedBy: z.string(),
    createdAt: z.coerce.date()
})

export type LeadComplianceHistory = z.infer<typeof LeadComplianceHistorySchema>

/////////////////////////////////////////
// LEAD COMPLIANCE HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadComplianceHistoryOptionalDefaultsSchema = LeadComplianceHistorySchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type LeadComplianceHistoryOptionalDefaults = z.infer<typeof LeadComplianceHistoryOptionalDefaultsSchema>

export default LeadComplianceHistorySchema
