import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ComplianceTypeSchema } from '../inputTypeSchemas/ComplianceTypeSchema'
import { ComplianceStatusSchema } from '../inputTypeSchemas/ComplianceStatusSchema'

/////////////////////////////////////////
// LEAD COMPLIANCE AUDIT SCHEMA
/////////////////////////////////////////

export const LeadComplianceAuditSchema = z.object({
  type: ComplianceTypeSchema,
  status: ComplianceStatusSchema,
  id: z.string().cuid(),
  leadId: z.string(),
  findings: z.string().nullish(),
  requirements: JsonValueSchema,
  documentation: JsonValueSchema,
  evidences: JsonValueSchema,
  riskLevel: z.string(),
  riskFactors: JsonValueSchema,
  mitigationSteps: JsonValueSchema,
  reviewedBy: z.string().nullish(),
  reviewedAt: z.coerce.date().nullish(),
  nextReviewDate: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LeadComplianceAudit = z.infer<typeof LeadComplianceAuditSchema>

/////////////////////////////////////////
// LEAD COMPLIANCE AUDIT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadComplianceAuditOptionalDefaultsSchema = LeadComplianceAuditSchema.merge(z.object({
  status: ComplianceStatusSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadComplianceAuditOptionalDefaults = z.infer<typeof LeadComplianceAuditOptionalDefaultsSchema>

export default LeadComplianceAuditSchema;
