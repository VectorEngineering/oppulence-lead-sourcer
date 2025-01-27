import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { LeadSourceSchema } from './LeadSourceSchema';
import { EnumLeadSourceFieldUpdateOperationsInputSchema } from './EnumLeadSourceFieldUpdateOperationsInputSchema';
import { LeadStageSchema } from './LeadStageSchema';
import { EnumLeadStageFieldUpdateOperationsInputSchema } from './EnumLeadStageFieldUpdateOperationsInputSchema';
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema';
import { EnumLeadVerificationStatusFieldUpdateOperationsInputSchema } from './EnumLeadVerificationStatusFieldUpdateOperationsInputSchema';
import { LeadPrioritySchema } from './LeadPrioritySchema';
import { EnumLeadPriorityFieldUpdateOperationsInputSchema } from './EnumLeadPriorityFieldUpdateOperationsInputSchema';
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema';
import { NullableEnumLeadCategoryTagFieldUpdateOperationsInputSchema } from './NullableEnumLeadCategoryTagFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { LeadCategoryUncheckedUpdateManyWithoutLeadsNestedInputSchema } from './LeadCategoryUncheckedUpdateManyWithoutLeadsNestedInputSchema';
import { DocumentUncheckedUpdateManyWithoutLeadNestedInputSchema } from './DocumentUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { TagUncheckedUpdateManyWithoutLeadNestedInputSchema } from './TagUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadCommentUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadCommentUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadHistoryUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadHistoryUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadContactPreferenceUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadContactPreferenceUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadSocialProfileUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadSocialProfileUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadCommunicationUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadCommunicationUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadDecisionMakerUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadDecisionMakerUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadRequirementUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadRequirementUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadTimelineUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadTimelineUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadCompetitorUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadCompetitorUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadRiskUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadRiskUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadTouchpointUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadTouchpointUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadConsentUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadConsentUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadExternalSystemUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadExternalSystemUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadTaskUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadTaskUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadCompanyDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema } from './LeadCompanyDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema';
import { LeadPersonalDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema } from './LeadPersonalDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema';
import { LeadMetadataUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadMetadataUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadLabelUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadLabelUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { DealUncheckedUpdateManyWithoutLeadNestedInputSchema } from './DealUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadScoreUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadScoreUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { CampaignUncheckedUpdateManyWithoutLeadsNestedInputSchema } from './CampaignUncheckedUpdateManyWithoutLeadsNestedInputSchema';
import { LeadProductFitUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadProductFitUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadBudgetUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadBudgetUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadSegmentationUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadSegmentationUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadFeedbackUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadFeedbackUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadNurturingUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadNurturingUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadComplianceAuditUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadComplianceAuditUncheckedUpdateManyWithoutLeadNestedInputSchema';
import { LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadNestedInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadNestedInputSchema';

export const LeadUncheckedUpdateWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadUncheckedUpdateWithoutAssignedToInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  internalNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  probability: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  weightedAmount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actualAmount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  leadSource: z.union([ z.lazy(() => LeadSourceSchema),z.lazy(() => EnumLeadSourceFieldUpdateOperationsInputSchema) ]).optional(),
  stage: z.union([ z.lazy(() => LeadStageSchema),z.lazy(() => EnumLeadStageFieldUpdateOperationsInputSchema) ]).optional(),
  verificationStatus: z.union([ z.lazy(() => LeadVerificationStatusSchema),z.lazy(() => EnumLeadVerificationStatusFieldUpdateOperationsInputSchema) ]).optional(),
  priority: z.union([ z.lazy(() => LeadPrioritySchema),z.lazy(() => EnumLeadPriorityFieldUpdateOperationsInputSchema) ]).optional(),
  categoryTag: z.union([ z.lazy(() => LeadCategoryTagSchema),z.lazy(() => NullableEnumLeadCategoryTagFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  closeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nextFollowUp: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastContactDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contactName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contactEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contactPhone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  contactTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  industry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pipelineStage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salesRep: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  territory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  winReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lossReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  archivedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  convertedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qualifiedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  closedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastActivity: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nextAction: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  followUpStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  engagementScore: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dataConsent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  dataRetention: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  externalId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  syncStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastSyncedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => LeadCategoryUncheckedUpdateManyWithoutLeadsNestedInputSchema).optional(),
  attachments: z.lazy(() => DocumentUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  comments: z.lazy(() => LeadCommentUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  history: z.lazy(() => LeadHistoryUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  contactPreferences: z.lazy(() => LeadContactPreferenceUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  socialProfiles: z.lazy(() => LeadSocialProfileUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  communications: z.lazy(() => LeadCommunicationUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  decisionMakers: z.lazy(() => LeadDecisionMakerUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  requirements: z.lazy(() => LeadRequirementUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  timelines: z.lazy(() => LeadTimelineUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  competitors: z.lazy(() => LeadCompetitorUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  risks: z.lazy(() => LeadRiskUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  touchpoints: z.lazy(() => LeadTouchpointUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  consents: z.lazy(() => LeadConsentUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  externalSystems: z.lazy(() => LeadExternalSystemUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  leadTasks: z.lazy(() => LeadTaskUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  companyDetails: z.lazy(() => LeadCompanyDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema).optional(),
  personalDetails: z.lazy(() => LeadPersonalDetailsUncheckedUpdateOneWithoutLeadNestedInputSchema).optional(),
  metadata: z.lazy(() => LeadMetadataUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  labels: z.lazy(() => LeadLabelUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  deals: z.lazy(() => DealUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadScore: z.lazy(() => LeadScoreUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  Campaign: z.lazy(() => CampaignUncheckedUpdateManyWithoutLeadsNestedInputSchema).optional(),
  LeadProductFit: z.lazy(() => LeadProductFitUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadBudget: z.lazy(() => LeadBudgetUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadSegmentation: z.lazy(() => LeadSegmentationUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadFeedback: z.lazy(() => LeadFeedbackUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadNurturing: z.lazy(() => LeadNurturingUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadComplianceAudit: z.lazy(() => LeadComplianceAuditUncheckedUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadCompetitiveAnalysis: z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadNestedInputSchema).optional()
}).strict();

export default LeadUncheckedUpdateWithoutAssignedToInputSchema;
