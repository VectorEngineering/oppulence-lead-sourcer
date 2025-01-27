import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { EnumLeadSourceFilterSchema } from './EnumLeadSourceFilterSchema'
import { LeadSourceSchema } from './LeadSourceSchema'
import { EnumLeadStageFilterSchema } from './EnumLeadStageFilterSchema'
import { LeadStageSchema } from './LeadStageSchema'
import { EnumLeadVerificationStatusFilterSchema } from './EnumLeadVerificationStatusFilterSchema'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'
import { EnumLeadPriorityFilterSchema } from './EnumLeadPriorityFilterSchema'
import { LeadPrioritySchema } from './LeadPrioritySchema'
import { EnumLeadCategoryTagNullableFilterSchema } from './EnumLeadCategoryTagNullableFilterSchema'
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { LeadCategoryListRelationFilterSchema } from './LeadCategoryListRelationFilterSchema'
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { DocumentListRelationFilterSchema } from './DocumentListRelationFilterSchema'
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema'
import { LeadCommentListRelationFilterSchema } from './LeadCommentListRelationFilterSchema'
import { LeadHistoryListRelationFilterSchema } from './LeadHistoryListRelationFilterSchema'
import { LeadContactPreferenceListRelationFilterSchema } from './LeadContactPreferenceListRelationFilterSchema'
import { LeadSocialProfileListRelationFilterSchema } from './LeadSocialProfileListRelationFilterSchema'
import { LeadCommunicationListRelationFilterSchema } from './LeadCommunicationListRelationFilterSchema'
import { LeadDecisionMakerListRelationFilterSchema } from './LeadDecisionMakerListRelationFilterSchema'
import { LeadRequirementListRelationFilterSchema } from './LeadRequirementListRelationFilterSchema'
import { LeadTimelineListRelationFilterSchema } from './LeadTimelineListRelationFilterSchema'
import { LeadCompetitorListRelationFilterSchema } from './LeadCompetitorListRelationFilterSchema'
import { LeadRiskListRelationFilterSchema } from './LeadRiskListRelationFilterSchema'
import { LeadTouchpointListRelationFilterSchema } from './LeadTouchpointListRelationFilterSchema'
import { LeadConsentListRelationFilterSchema } from './LeadConsentListRelationFilterSchema'
import { LeadExternalSystemListRelationFilterSchema } from './LeadExternalSystemListRelationFilterSchema'
import { LeadTaskListRelationFilterSchema } from './LeadTaskListRelationFilterSchema'
import { LeadCompanyDetailsNullableRelationFilterSchema } from './LeadCompanyDetailsNullableRelationFilterSchema'
import { LeadCompanyDetailsWhereInputSchema } from './LeadCompanyDetailsWhereInputSchema'
import { LeadPersonalDetailsNullableRelationFilterSchema } from './LeadPersonalDetailsNullableRelationFilterSchema'
import { LeadPersonalDetailsWhereInputSchema } from './LeadPersonalDetailsWhereInputSchema'
import { LeadMetadataListRelationFilterSchema } from './LeadMetadataListRelationFilterSchema'
import { LeadLabelListRelationFilterSchema } from './LeadLabelListRelationFilterSchema'
import { DealListRelationFilterSchema } from './DealListRelationFilterSchema'
import { LeadScoreListRelationFilterSchema } from './LeadScoreListRelationFilterSchema'
import { CampaignListRelationFilterSchema } from './CampaignListRelationFilterSchema'
import { LeadProductFitListRelationFilterSchema } from './LeadProductFitListRelationFilterSchema'
import { LeadBudgetListRelationFilterSchema } from './LeadBudgetListRelationFilterSchema'
import { LeadSegmentationListRelationFilterSchema } from './LeadSegmentationListRelationFilterSchema'
import { LeadFeedbackListRelationFilterSchema } from './LeadFeedbackListRelationFilterSchema'
import { LeadNurturingListRelationFilterSchema } from './LeadNurturingListRelationFilterSchema'
import { LeadComplianceAuditListRelationFilterSchema } from './LeadComplianceAuditListRelationFilterSchema'
import { LeadCompetitiveAnalysisListRelationFilterSchema } from './LeadCompetitiveAnalysisListRelationFilterSchema'

export const LeadWhereInputSchema: z.ZodType<Prisma.LeadWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadWhereInputSchema), z.lazy(() => LeadWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadWhereInputSchema), z.lazy(() => LeadWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        note: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        internalNotes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        reference: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        amount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        probability: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        weightedAmount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        actualAmount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        leadSource: z.union([z.lazy(() => EnumLeadSourceFilterSchema), z.lazy(() => LeadSourceSchema)]).optional(),
        stage: z.union([z.lazy(() => EnumLeadStageFilterSchema), z.lazy(() => LeadStageSchema)]).optional(),
        verificationStatus: z
            .union([z.lazy(() => EnumLeadVerificationStatusFilterSchema), z.lazy(() => LeadVerificationStatusSchema)])
            .optional(),
        priority: z.union([z.lazy(() => EnumLeadPriorityFilterSchema), z.lazy(() => LeadPrioritySchema)]).optional(),
        categoryTag: z
            .union([z.lazy(() => EnumLeadCategoryTagNullableFilterSchema), z.lazy(() => LeadCategoryTagSchema)])
            .optional()
            .nullable(),
        closeDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        nextFollowUp: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastContactDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        contactName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contactEmail: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contactPhone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contactTitle: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        company: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        industry: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        pipelineStage: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        salesRep: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        territory: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        winReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lossReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        archivedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        convertedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        qualifiedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        closedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastActivity: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        nextAction: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        followUpStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        engagementScore: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        assignedId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        dataConsent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        dataRetention: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        externalId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        syncStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastSyncedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        categories: z.lazy(() => LeadCategoryListRelationFilterSchema).optional(),
        assignedTo: z
            .union([z.lazy(() => UserNullableRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
            .optional()
            .nullable(),
        project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        attachments: z.lazy(() => DocumentListRelationFilterSchema).optional(),
        tags: z.lazy(() => TagListRelationFilterSchema).optional(),
        comments: z.lazy(() => LeadCommentListRelationFilterSchema).optional(),
        history: z.lazy(() => LeadHistoryListRelationFilterSchema).optional(),
        contactPreferences: z.lazy(() => LeadContactPreferenceListRelationFilterSchema).optional(),
        socialProfiles: z.lazy(() => LeadSocialProfileListRelationFilterSchema).optional(),
        communications: z.lazy(() => LeadCommunicationListRelationFilterSchema).optional(),
        decisionMakers: z.lazy(() => LeadDecisionMakerListRelationFilterSchema).optional(),
        requirements: z.lazy(() => LeadRequirementListRelationFilterSchema).optional(),
        timelines: z.lazy(() => LeadTimelineListRelationFilterSchema).optional(),
        competitors: z.lazy(() => LeadCompetitorListRelationFilterSchema).optional(),
        risks: z.lazy(() => LeadRiskListRelationFilterSchema).optional(),
        touchpoints: z.lazy(() => LeadTouchpointListRelationFilterSchema).optional(),
        consents: z.lazy(() => LeadConsentListRelationFilterSchema).optional(),
        externalSystems: z.lazy(() => LeadExternalSystemListRelationFilterSchema).optional(),
        leadTasks: z.lazy(() => LeadTaskListRelationFilterSchema).optional(),
        companyDetails: z
            .union([z.lazy(() => LeadCompanyDetailsNullableRelationFilterSchema), z.lazy(() => LeadCompanyDetailsWhereInputSchema)])
            .optional()
            .nullable(),
        personalDetails: z
            .union([z.lazy(() => LeadPersonalDetailsNullableRelationFilterSchema), z.lazy(() => LeadPersonalDetailsWhereInputSchema)])
            .optional()
            .nullable(),
        metadata: z.lazy(() => LeadMetadataListRelationFilterSchema).optional(),
        labels: z.lazy(() => LeadLabelListRelationFilterSchema).optional(),
        deals: z.lazy(() => DealListRelationFilterSchema).optional(),
        LeadScore: z.lazy(() => LeadScoreListRelationFilterSchema).optional(),
        Campaign: z.lazy(() => CampaignListRelationFilterSchema).optional(),
        LeadProductFit: z.lazy(() => LeadProductFitListRelationFilterSchema).optional(),
        LeadBudget: z.lazy(() => LeadBudgetListRelationFilterSchema).optional(),
        LeadSegmentation: z.lazy(() => LeadSegmentationListRelationFilterSchema).optional(),
        LeadFeedback: z.lazy(() => LeadFeedbackListRelationFilterSchema).optional(),
        LeadNurturing: z.lazy(() => LeadNurturingListRelationFilterSchema).optional(),
        LeadComplianceAudit: z.lazy(() => LeadComplianceAuditListRelationFilterSchema).optional(),
        LeadCompetitiveAnalysis: z.lazy(() => LeadCompetitiveAnalysisListRelationFilterSchema).optional()
    })
    .strict()

export default LeadWhereInputSchema
