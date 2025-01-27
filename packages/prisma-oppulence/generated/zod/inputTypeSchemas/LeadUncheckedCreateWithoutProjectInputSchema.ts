import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSourceSchema } from './LeadSourceSchema';
import { LeadStageSchema } from './LeadStageSchema';
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema';
import { LeadPrioritySchema } from './LeadPrioritySchema';
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema';
import { LeadCategoryUncheckedCreateNestedManyWithoutLeadsInputSchema } from './LeadCategoryUncheckedCreateNestedManyWithoutLeadsInputSchema';
import { DocumentUncheckedCreateNestedManyWithoutLeadInputSchema } from './DocumentUncheckedCreateNestedManyWithoutLeadInputSchema';
import { TagUncheckedCreateNestedManyWithoutLeadInputSchema } from './TagUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadCommentUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadCommentUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadHistoryUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadHistoryUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadContactPreferenceUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadSocialProfileUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadSocialProfileUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadCommunicationUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadCommunicationUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadDecisionMakerUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadRequirementUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadRequirementUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadTimelineUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadTimelineUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadCompetitorUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadCompetitorUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadRiskUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadRiskUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadTouchpointUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadTouchpointUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadConsentUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadConsentUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadExternalSystemUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadExternalSystemUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadTaskUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadTaskUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadCompanyDetailsUncheckedCreateNestedOneWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedCreateNestedOneWithoutLeadInputSchema';
import { LeadPersonalDetailsUncheckedCreateNestedOneWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedCreateNestedOneWithoutLeadInputSchema';
import { LeadMetadataUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadMetadataUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadLabelUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadLabelUncheckedCreateNestedManyWithoutLeadInputSchema';
import { DealUncheckedCreateNestedManyWithoutLeadInputSchema } from './DealUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadScoreUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadScoreUncheckedCreateNestedManyWithoutLeadInputSchema';
import { CampaignUncheckedCreateNestedManyWithoutLeadsInputSchema } from './CampaignUncheckedCreateNestedManyWithoutLeadsInputSchema';
import { LeadProductFitUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadProductFitUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadBudgetUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadBudgetUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadSegmentationUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadSegmentationUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadFeedbackUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadFeedbackUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadNurturingUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadNurturingUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadComplianceAuditUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedCreateNestedManyWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisUncheckedCreateNestedManyWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateNestedManyWithoutLeadInputSchema';

export const LeadUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.LeadUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
  internalNotes: z.string().optional().nullable(),
  reference: z.string().optional().nullable(),
  amount: z.number(),
  probability: z.number().optional().nullable(),
  weightedAmount: z.number().optional().nullable(),
  actualAmount: z.number().optional().nullable(),
  leadSource: z.lazy(() => LeadSourceSchema).optional(),
  stage: z.lazy(() => LeadStageSchema).optional(),
  verificationStatus: z.lazy(() => LeadVerificationStatusSchema).optional(),
  priority: z.lazy(() => LeadPrioritySchema).optional(),
  categoryTag: z.lazy(() => LeadCategoryTagSchema).optional().nullable(),
  closeDate: z.coerce.date().optional().nullable(),
  nextFollowUp: z.coerce.date().optional().nullable(),
  lastContactDate: z.coerce.date().optional().nullable(),
  contactName: z.string().optional().nullable(),
  contactEmail: z.string().optional().nullable(),
  contactPhone: z.string().optional().nullable(),
  contactTitle: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  pipelineStage: z.string().optional().nullable(),
  salesRep: z.string().optional().nullable(),
  territory: z.string().optional().nullable(),
  winReason: z.string().optional().nullable(),
  lossReason: z.string().optional().nullable(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  archivedAt: z.coerce.date().optional().nullable(),
  convertedAt: z.coerce.date().optional().nullable(),
  qualifiedAt: z.coerce.date().optional().nullable(),
  closedAt: z.coerce.date().optional().nullable(),
  lastActivity: z.string().optional().nullable(),
  nextAction: z.string().optional().nullable(),
  followUpStatus: z.string().optional().nullable(),
  engagementScore: z.number().optional().nullable(),
  assignedId: z.string().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  dataConsent: z.boolean().optional(),
  dataRetention: z.coerce.date().optional().nullable(),
  externalId: z.string().optional().nullable(),
  syncStatus: z.string().optional().nullable(),
  lastSyncedAt: z.coerce.date().optional().nullable(),
  categories: z.lazy(() => LeadCategoryUncheckedCreateNestedManyWithoutLeadsInputSchema).optional(),
  attachments: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  comments: z.lazy(() => LeadCommentUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  history: z.lazy(() => LeadHistoryUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  contactPreferences: z.lazy(() => LeadContactPreferenceUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  socialProfiles: z.lazy(() => LeadSocialProfileUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  communications: z.lazy(() => LeadCommunicationUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  decisionMakers: z.lazy(() => LeadDecisionMakerUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  requirements: z.lazy(() => LeadRequirementUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  timelines: z.lazy(() => LeadTimelineUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  competitors: z.lazy(() => LeadCompetitorUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  risks: z.lazy(() => LeadRiskUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  touchpoints: z.lazy(() => LeadTouchpointUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  consents: z.lazy(() => LeadConsentUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  externalSystems: z.lazy(() => LeadExternalSystemUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  leadTasks: z.lazy(() => LeadTaskUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  companyDetails: z.lazy(() => LeadCompanyDetailsUncheckedCreateNestedOneWithoutLeadInputSchema).optional(),
  personalDetails: z.lazy(() => LeadPersonalDetailsUncheckedCreateNestedOneWithoutLeadInputSchema).optional(),
  metadata: z.lazy(() => LeadMetadataUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  labels: z.lazy(() => LeadLabelUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  deals: z.lazy(() => DealUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadScore: z.lazy(() => LeadScoreUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  Campaign: z.lazy(() => CampaignUncheckedCreateNestedManyWithoutLeadsInputSchema).optional(),
  LeadProductFit: z.lazy(() => LeadProductFitUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadBudget: z.lazy(() => LeadBudgetUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadSegmentation: z.lazy(() => LeadSegmentationUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadFeedback: z.lazy(() => LeadFeedbackUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadNurturing: z.lazy(() => LeadNurturingUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadComplianceAudit: z.lazy(() => LeadComplianceAuditUncheckedCreateNestedManyWithoutLeadInputSchema).optional(),
  LeadCompetitiveAnalysis: z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateNestedManyWithoutLeadInputSchema).optional()
}).strict();

export default LeadUncheckedCreateWithoutProjectInputSchema;
