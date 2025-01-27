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
import { LeadCategoryUpdateManyWithoutLeadsNestedInputSchema } from './LeadCategoryUpdateManyWithoutLeadsNestedInputSchema';
import { UserUpdateOneWithoutLeadNestedInputSchema } from './UserUpdateOneWithoutLeadNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutLeadNestedInputSchema } from './ProjectUpdateOneRequiredWithoutLeadNestedInputSchema';
import { DocumentUpdateManyWithoutLeadNestedInputSchema } from './DocumentUpdateManyWithoutLeadNestedInputSchema';
import { TagUpdateManyWithoutLeadNestedInputSchema } from './TagUpdateManyWithoutLeadNestedInputSchema';
import { LeadCommentUpdateManyWithoutLeadNestedInputSchema } from './LeadCommentUpdateManyWithoutLeadNestedInputSchema';
import { LeadHistoryUpdateManyWithoutLeadNestedInputSchema } from './LeadHistoryUpdateManyWithoutLeadNestedInputSchema';
import { LeadContactPreferenceUpdateManyWithoutLeadNestedInputSchema } from './LeadContactPreferenceUpdateManyWithoutLeadNestedInputSchema';
import { LeadSocialProfileUpdateManyWithoutLeadNestedInputSchema } from './LeadSocialProfileUpdateManyWithoutLeadNestedInputSchema';
import { LeadCommunicationUpdateManyWithoutLeadNestedInputSchema } from './LeadCommunicationUpdateManyWithoutLeadNestedInputSchema';
import { LeadDecisionMakerUpdateManyWithoutLeadNestedInputSchema } from './LeadDecisionMakerUpdateManyWithoutLeadNestedInputSchema';
import { LeadTimelineUpdateManyWithoutLeadNestedInputSchema } from './LeadTimelineUpdateManyWithoutLeadNestedInputSchema';
import { LeadCompetitorUpdateManyWithoutLeadNestedInputSchema } from './LeadCompetitorUpdateManyWithoutLeadNestedInputSchema';
import { LeadRiskUpdateManyWithoutLeadNestedInputSchema } from './LeadRiskUpdateManyWithoutLeadNestedInputSchema';
import { LeadTouchpointUpdateManyWithoutLeadNestedInputSchema } from './LeadTouchpointUpdateManyWithoutLeadNestedInputSchema';
import { LeadConsentUpdateManyWithoutLeadNestedInputSchema } from './LeadConsentUpdateManyWithoutLeadNestedInputSchema';
import { LeadExternalSystemUpdateManyWithoutLeadNestedInputSchema } from './LeadExternalSystemUpdateManyWithoutLeadNestedInputSchema';
import { LeadTaskUpdateManyWithoutLeadNestedInputSchema } from './LeadTaskUpdateManyWithoutLeadNestedInputSchema';
import { LeadCompanyDetailsUpdateOneWithoutLeadNestedInputSchema } from './LeadCompanyDetailsUpdateOneWithoutLeadNestedInputSchema';
import { LeadPersonalDetailsUpdateOneWithoutLeadNestedInputSchema } from './LeadPersonalDetailsUpdateOneWithoutLeadNestedInputSchema';
import { LeadMetadataUpdateManyWithoutLeadNestedInputSchema } from './LeadMetadataUpdateManyWithoutLeadNestedInputSchema';
import { LeadLabelUpdateManyWithoutLeadNestedInputSchema } from './LeadLabelUpdateManyWithoutLeadNestedInputSchema';
import { DealUpdateManyWithoutLeadNestedInputSchema } from './DealUpdateManyWithoutLeadNestedInputSchema';
import { LeadScoreUpdateManyWithoutLeadNestedInputSchema } from './LeadScoreUpdateManyWithoutLeadNestedInputSchema';
import { CampaignUpdateManyWithoutLeadsNestedInputSchema } from './CampaignUpdateManyWithoutLeadsNestedInputSchema';
import { LeadProductFitUpdateManyWithoutLeadNestedInputSchema } from './LeadProductFitUpdateManyWithoutLeadNestedInputSchema';
import { LeadBudgetUpdateManyWithoutLeadNestedInputSchema } from './LeadBudgetUpdateManyWithoutLeadNestedInputSchema';
import { LeadSegmentationUpdateManyWithoutLeadNestedInputSchema } from './LeadSegmentationUpdateManyWithoutLeadNestedInputSchema';
import { LeadFeedbackUpdateManyWithoutLeadNestedInputSchema } from './LeadFeedbackUpdateManyWithoutLeadNestedInputSchema';
import { LeadNurturingUpdateManyWithoutLeadNestedInputSchema } from './LeadNurturingUpdateManyWithoutLeadNestedInputSchema';
import { LeadComplianceAuditUpdateManyWithoutLeadNestedInputSchema } from './LeadComplianceAuditUpdateManyWithoutLeadNestedInputSchema';
import { LeadCompetitiveAnalysisUpdateManyWithoutLeadNestedInputSchema } from './LeadCompetitiveAnalysisUpdateManyWithoutLeadNestedInputSchema';

export const LeadUpdateWithoutRequirementsInputSchema: z.ZodType<Prisma.LeadUpdateWithoutRequirementsInput> = z.object({
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
  dataConsent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  dataRetention: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  externalId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  syncStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastSyncedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => LeadCategoryUpdateManyWithoutLeadsNestedInputSchema).optional(),
  assignedTo: z.lazy(() => UserUpdateOneWithoutLeadNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutLeadNestedInputSchema).optional(),
  attachments: z.lazy(() => DocumentUpdateManyWithoutLeadNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutLeadNestedInputSchema).optional(),
  comments: z.lazy(() => LeadCommentUpdateManyWithoutLeadNestedInputSchema).optional(),
  history: z.lazy(() => LeadHistoryUpdateManyWithoutLeadNestedInputSchema).optional(),
  contactPreferences: z.lazy(() => LeadContactPreferenceUpdateManyWithoutLeadNestedInputSchema).optional(),
  socialProfiles: z.lazy(() => LeadSocialProfileUpdateManyWithoutLeadNestedInputSchema).optional(),
  communications: z.lazy(() => LeadCommunicationUpdateManyWithoutLeadNestedInputSchema).optional(),
  decisionMakers: z.lazy(() => LeadDecisionMakerUpdateManyWithoutLeadNestedInputSchema).optional(),
  timelines: z.lazy(() => LeadTimelineUpdateManyWithoutLeadNestedInputSchema).optional(),
  competitors: z.lazy(() => LeadCompetitorUpdateManyWithoutLeadNestedInputSchema).optional(),
  risks: z.lazy(() => LeadRiskUpdateManyWithoutLeadNestedInputSchema).optional(),
  touchpoints: z.lazy(() => LeadTouchpointUpdateManyWithoutLeadNestedInputSchema).optional(),
  consents: z.lazy(() => LeadConsentUpdateManyWithoutLeadNestedInputSchema).optional(),
  externalSystems: z.lazy(() => LeadExternalSystemUpdateManyWithoutLeadNestedInputSchema).optional(),
  leadTasks: z.lazy(() => LeadTaskUpdateManyWithoutLeadNestedInputSchema).optional(),
  companyDetails: z.lazy(() => LeadCompanyDetailsUpdateOneWithoutLeadNestedInputSchema).optional(),
  personalDetails: z.lazy(() => LeadPersonalDetailsUpdateOneWithoutLeadNestedInputSchema).optional(),
  metadata: z.lazy(() => LeadMetadataUpdateManyWithoutLeadNestedInputSchema).optional(),
  labels: z.lazy(() => LeadLabelUpdateManyWithoutLeadNestedInputSchema).optional(),
  deals: z.lazy(() => DealUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadScore: z.lazy(() => LeadScoreUpdateManyWithoutLeadNestedInputSchema).optional(),
  Campaign: z.lazy(() => CampaignUpdateManyWithoutLeadsNestedInputSchema).optional(),
  LeadProductFit: z.lazy(() => LeadProductFitUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadBudget: z.lazy(() => LeadBudgetUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadSegmentation: z.lazy(() => LeadSegmentationUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadFeedback: z.lazy(() => LeadFeedbackUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadNurturing: z.lazy(() => LeadNurturingUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadComplianceAudit: z.lazy(() => LeadComplianceAuditUpdateManyWithoutLeadNestedInputSchema).optional(),
  LeadCompetitiveAnalysis: z.lazy(() => LeadCompetitiveAnalysisUpdateManyWithoutLeadNestedInputSchema).optional()
}).strict();

export default LeadUpdateWithoutRequirementsInputSchema;
