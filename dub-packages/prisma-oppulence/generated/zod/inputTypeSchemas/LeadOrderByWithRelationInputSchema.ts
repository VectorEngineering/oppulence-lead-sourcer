import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadCategoryOrderByRelationAggregateInputSchema } from './LeadCategoryOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { DocumentOrderByRelationAggregateInputSchema } from './DocumentOrderByRelationAggregateInputSchema';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema';
import { LeadCommentOrderByRelationAggregateInputSchema } from './LeadCommentOrderByRelationAggregateInputSchema';
import { LeadHistoryOrderByRelationAggregateInputSchema } from './LeadHistoryOrderByRelationAggregateInputSchema';
import { LeadContactPreferenceOrderByRelationAggregateInputSchema } from './LeadContactPreferenceOrderByRelationAggregateInputSchema';
import { LeadSocialProfileOrderByRelationAggregateInputSchema } from './LeadSocialProfileOrderByRelationAggregateInputSchema';
import { LeadCommunicationOrderByRelationAggregateInputSchema } from './LeadCommunicationOrderByRelationAggregateInputSchema';
import { LeadDecisionMakerOrderByRelationAggregateInputSchema } from './LeadDecisionMakerOrderByRelationAggregateInputSchema';
import { LeadRequirementOrderByRelationAggregateInputSchema } from './LeadRequirementOrderByRelationAggregateInputSchema';
import { LeadTimelineOrderByRelationAggregateInputSchema } from './LeadTimelineOrderByRelationAggregateInputSchema';
import { LeadCompetitorOrderByRelationAggregateInputSchema } from './LeadCompetitorOrderByRelationAggregateInputSchema';
import { LeadRiskOrderByRelationAggregateInputSchema } from './LeadRiskOrderByRelationAggregateInputSchema';
import { LeadTouchpointOrderByRelationAggregateInputSchema } from './LeadTouchpointOrderByRelationAggregateInputSchema';
import { LeadConsentOrderByRelationAggregateInputSchema } from './LeadConsentOrderByRelationAggregateInputSchema';
import { LeadExternalSystemOrderByRelationAggregateInputSchema } from './LeadExternalSystemOrderByRelationAggregateInputSchema';
import { LeadTaskOrderByRelationAggregateInputSchema } from './LeadTaskOrderByRelationAggregateInputSchema';
import { LeadCompanyDetailsOrderByWithRelationInputSchema } from './LeadCompanyDetailsOrderByWithRelationInputSchema';
import { LeadPersonalDetailsOrderByWithRelationInputSchema } from './LeadPersonalDetailsOrderByWithRelationInputSchema';
import { LeadMetadataOrderByRelationAggregateInputSchema } from './LeadMetadataOrderByRelationAggregateInputSchema';
import { LeadLabelOrderByRelationAggregateInputSchema } from './LeadLabelOrderByRelationAggregateInputSchema';
import { DealOrderByRelationAggregateInputSchema } from './DealOrderByRelationAggregateInputSchema';
import { LeadScoreOrderByRelationAggregateInputSchema } from './LeadScoreOrderByRelationAggregateInputSchema';
import { CampaignOrderByRelationAggregateInputSchema } from './CampaignOrderByRelationAggregateInputSchema';
import { LeadProductFitOrderByRelationAggregateInputSchema } from './LeadProductFitOrderByRelationAggregateInputSchema';
import { LeadBudgetOrderByRelationAggregateInputSchema } from './LeadBudgetOrderByRelationAggregateInputSchema';
import { LeadSegmentationOrderByRelationAggregateInputSchema } from './LeadSegmentationOrderByRelationAggregateInputSchema';
import { LeadFeedbackOrderByRelationAggregateInputSchema } from './LeadFeedbackOrderByRelationAggregateInputSchema';
import { LeadNurturingOrderByRelationAggregateInputSchema } from './LeadNurturingOrderByRelationAggregateInputSchema';
import { LeadComplianceAuditOrderByRelationAggregateInputSchema } from './LeadComplianceAuditOrderByRelationAggregateInputSchema';
import { LeadCompetitiveAnalysisOrderByRelationAggregateInputSchema } from './LeadCompetitiveAnalysisOrderByRelationAggregateInputSchema';
import { LeadOrderByRelevanceInputSchema } from './LeadOrderByRelevanceInputSchema';

export const LeadOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  internalNotes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reference: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  probability: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  weightedAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  actualAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  leadSource: z.lazy(() => SortOrderSchema).optional(),
  stage: z.lazy(() => SortOrderSchema).optional(),
  verificationStatus: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  categoryTag: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  closeDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextFollowUp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastContactDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  contactName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  contactEmail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  contactPhone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  contactTitle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  company: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  industry: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipelineStage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  salesRep: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  territory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  winReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lossReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  archivedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  convertedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  qualifiedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  closedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastActivity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nextAction: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  followUpStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  engagementScore: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  assignedId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  dataConsent: z.lazy(() => SortOrderSchema).optional(),
  dataRetention: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  externalId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  syncStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastSyncedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  categories: z.lazy(() => LeadCategoryOrderByRelationAggregateInputSchema).optional(),
  assignedTo: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  attachments: z.lazy(() => DocumentOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  comments: z.lazy(() => LeadCommentOrderByRelationAggregateInputSchema).optional(),
  history: z.lazy(() => LeadHistoryOrderByRelationAggregateInputSchema).optional(),
  contactPreferences: z.lazy(() => LeadContactPreferenceOrderByRelationAggregateInputSchema).optional(),
  socialProfiles: z.lazy(() => LeadSocialProfileOrderByRelationAggregateInputSchema).optional(),
  communications: z.lazy(() => LeadCommunicationOrderByRelationAggregateInputSchema).optional(),
  decisionMakers: z.lazy(() => LeadDecisionMakerOrderByRelationAggregateInputSchema).optional(),
  requirements: z.lazy(() => LeadRequirementOrderByRelationAggregateInputSchema).optional(),
  timelines: z.lazy(() => LeadTimelineOrderByRelationAggregateInputSchema).optional(),
  competitors: z.lazy(() => LeadCompetitorOrderByRelationAggregateInputSchema).optional(),
  risks: z.lazy(() => LeadRiskOrderByRelationAggregateInputSchema).optional(),
  touchpoints: z.lazy(() => LeadTouchpointOrderByRelationAggregateInputSchema).optional(),
  consents: z.lazy(() => LeadConsentOrderByRelationAggregateInputSchema).optional(),
  externalSystems: z.lazy(() => LeadExternalSystemOrderByRelationAggregateInputSchema).optional(),
  leadTasks: z.lazy(() => LeadTaskOrderByRelationAggregateInputSchema).optional(),
  companyDetails: z.lazy(() => LeadCompanyDetailsOrderByWithRelationInputSchema).optional(),
  personalDetails: z.lazy(() => LeadPersonalDetailsOrderByWithRelationInputSchema).optional(),
  metadata: z.lazy(() => LeadMetadataOrderByRelationAggregateInputSchema).optional(),
  labels: z.lazy(() => LeadLabelOrderByRelationAggregateInputSchema).optional(),
  deals: z.lazy(() => DealOrderByRelationAggregateInputSchema).optional(),
  LeadScore: z.lazy(() => LeadScoreOrderByRelationAggregateInputSchema).optional(),
  Campaign: z.lazy(() => CampaignOrderByRelationAggregateInputSchema).optional(),
  LeadProductFit: z.lazy(() => LeadProductFitOrderByRelationAggregateInputSchema).optional(),
  LeadBudget: z.lazy(() => LeadBudgetOrderByRelationAggregateInputSchema).optional(),
  LeadSegmentation: z.lazy(() => LeadSegmentationOrderByRelationAggregateInputSchema).optional(),
  LeadFeedback: z.lazy(() => LeadFeedbackOrderByRelationAggregateInputSchema).optional(),
  LeadNurturing: z.lazy(() => LeadNurturingOrderByRelationAggregateInputSchema).optional(),
  LeadComplianceAudit: z.lazy(() => LeadComplianceAuditOrderByRelationAggregateInputSchema).optional(),
  LeadCompetitiveAnalysis: z.lazy(() => LeadCompetitiveAnalysisOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LeadOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadOrderByWithRelationInputSchema;
