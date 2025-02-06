import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { CustomerRelationFilterSchema } from './CustomerRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { ContractNullableRelationFilterSchema } from './ContractNullableRelationFilterSchema';
import { ContractListRelationFilterSchema } from './ContractListRelationFilterSchema';
import { ContractEventListRelationFilterSchema } from './ContractEventListRelationFilterSchema';
import { ContractApprovalListRelationFilterSchema } from './ContractApprovalListRelationFilterSchema';
import { ContractDocumentListRelationFilterSchema } from './ContractDocumentListRelationFilterSchema';
import { ContractVersionListRelationFilterSchema } from './ContractVersionListRelationFilterSchema';

export const ContractWhereUniqueInputSchema: z.ZodType<Prisma.ContractWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    contractNumber: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    contractNumber: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  contractNumber: z.string().optional(),
  AND: z.union([ z.lazy(() => ContractWhereInputSchema),z.lazy(() => ContractWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContractWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContractWhereInputSchema),z.lazy(() => ContractWhereInputSchema).array() ]).optional(),
  customerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  department: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  businessUnit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  version: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  isTemplate: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  parentContractId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  signedDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  terminationDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextReviewDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  renewalDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastAmendmentDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  value: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  billingFrequency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  billingTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paymentTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  autoRenewal: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  renewalTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  terminationFee: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  earlyTerminationTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  terms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  conditions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  governingLaw: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  disputeResolution: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  confidentialityLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  complianceStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  riskLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  riskAssessment: z.lazy(() => JsonNullableFilterSchema).optional(),
  contractOwner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  counterpartyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  counterpartyName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  counterpartyContact: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  witnesses: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  signatories: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stakeholders: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deliverables: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  milestones: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  slaTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  performanceMetrics: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  obligations: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  penalties: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  insuranceRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  liabilityTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  indemnificationTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  limitationOfLiability: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  intellectualProperty: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  licensedAssets: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  restrictions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  amendments: z.lazy(() => JsonNullableFilterSchema).optional(),
  changeHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
  approvalHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  supportingDocs: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attachments: z.lazy(() => JsonNullableFilterSchema).optional(),
  signatures: z.lazy(() => JsonNullableFilterSchema).optional(),
  accessLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessControlList: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  encryptionLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  notificationSettings: z.lazy(() => JsonNullableFilterSchema).optional(),
  reminderSettings: z.lazy(() => JsonNullableFilterSchema).optional(),
  alertContacts: z.lazy(() => JsonNullableFilterSchema).optional(),
  customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  notes: z.lazy(() => JsonNullableFilterSchema).optional(),
  externalReferences: z.lazy(() => JsonNullableFilterSchema).optional(),
  relatedContracts: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  approvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  archivedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  archivedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customer: z.union([ z.lazy(() => CustomerRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  parentContract: z.union([ z.lazy(() => ContractNullableRelationFilterSchema),z.lazy(() => ContractWhereInputSchema) ]).optional().nullable(),
  childContracts: z.lazy(() => ContractListRelationFilterSchema).optional(),
  contractEvents: z.lazy(() => ContractEventListRelationFilterSchema).optional(),
  contractApprovals: z.lazy(() => ContractApprovalListRelationFilterSchema).optional(),
  contractDocuments: z.lazy(() => ContractDocumentListRelationFilterSchema).optional(),
  contractVersions: z.lazy(() => ContractVersionListRelationFilterSchema).optional()
}).strict());

export default ContractWhereUniqueInputSchema;
