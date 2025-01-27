import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CONTRACT SCHEMA
/////////////////////////////////////////

export const ContractSchema = z.object({
  id: z.string().cuid(),
  customerId: z.string(),
  contractNumber: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  type: z.string(),
  category: z.string().nullish(),
  department: z.string().nullish(),
  businessUnit: z.string().nullish(),
  priority: z.string().nullish(),
  status: z.string(),
  stage: z.string().nullish(),
  version: z.number().int(),
  isTemplate: z.boolean(),
  parentContractId: z.string().nullish(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullish(),
  signedDate: z.coerce.date().nullish(),
  effectiveDate: z.coerce.date().nullish(),
  terminationDate: z.coerce.date().nullish(),
  nextReviewDate: z.coerce.date().nullish(),
  renewalDate: z.coerce.date().nullish(),
  lastAmendmentDate: z.coerce.date().nullish(),
  value: z.instanceof(Prisma.Decimal, { message: "Field 'value' must be a Decimal. Location: ['Models', 'Contract']"}).nullish(),
  currency: z.string(),
  billingFrequency: z.string().nullish(),
  billingTerms: z.string().nullish(),
  paymentTerms: z.string().nullish(),
  autoRenewal: z.boolean(),
  renewalTerms: z.string().nullish(),
  terminationFee: z.instanceof(Prisma.Decimal, { message: "Field 'terminationFee' must be a Decimal. Location: ['Models', 'Contract']"}).nullish(),
  earlyTerminationTerms: z.string().nullish(),
  terms: z.string().nullish(),
  conditions: z.string().nullish(),
  governingLaw: z.string().nullish(),
  disputeResolution: z.string().nullish(),
  confidentialityLevel: z.string().nullish(),
  complianceStatus: z.string().nullish(),
  riskLevel: z.string().nullish(),
  riskAssessment: JsonValueSchema.nullable(),
  contractOwner: z.string().nullish(),
  counterpartyId: z.string().nullish(),
  counterpartyName: z.string().nullish(),
  counterpartyContact: z.string().nullish(),
  witnesses: z.string().nullish(),
  signatories: z.string().nullish(),
  stakeholders: z.string().nullish(),
  deliverables: z.string().nullish(),
  milestones: z.string().nullish(),
  slaTerms: z.string().nullish(),
  performanceMetrics: z.string().nullish(),
  obligations: z.string().nullish(),
  penalties: z.string().nullish(),
  insuranceRequirements: z.string().nullish(),
  liabilityTerms: z.string().nullish(),
  indemnificationTerms: z.string().nullish(),
  limitationOfLiability: z.instanceof(Prisma.Decimal, { message: "Field 'limitationOfLiability' must be a Decimal. Location: ['Models', 'Contract']"}).nullish(),
  intellectualProperty: z.string().nullish(),
  licensedAssets: z.string().nullish(),
  restrictions: z.string().nullish(),
  amendments: JsonValueSchema.nullable(),
  changeHistory: JsonValueSchema.nullable(),
  approvalHistory: JsonValueSchema.nullable(),
  documentUrl: z.string().nullish(),
  supportingDocs: z.string().nullish(),
  attachments: JsonValueSchema.nullable(),
  signatures: JsonValueSchema.nullable(),
  accessLevel: z.string().nullish(),
  accessControlList: z.string().nullish(),
  encryptionLevel: z.string().nullish(),
  notificationSettings: JsonValueSchema.nullable(),
  reminderSettings: JsonValueSchema.nullable(),
  alertContacts: JsonValueSchema.nullable(),
  customFields: JsonValueSchema.nullable(),
  metadata: JsonValueSchema.nullable(),
  notes: JsonValueSchema.nullable(),
  externalReferences: JsonValueSchema.nullable(),
  relatedContracts: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
  reviewedBy: z.string().nullish(),
  approvedBy: z.string().nullish(),
  archivedAt: z.coerce.date().nullish(),
  archivedBy: z.string().nullish(),
})

export type Contract = z.infer<typeof ContractSchema>

/////////////////////////////////////////
// CONTRACT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ContractOptionalDefaultsSchema = ContractSchema.merge(z.object({
  id: z.string().cuid().optional(),
  version: z.number().int().optional(),
  isTemplate: z.boolean().optional(),
  currency: z.string().optional(),
  autoRenewal: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ContractOptionalDefaults = z.infer<typeof ContractOptionalDefaultsSchema>

export default ContractSchema;
