import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSourceSchema } from './LeadSourceSchema'
import { LeadStageSchema } from './LeadStageSchema'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'
import { LeadPrioritySchema } from './LeadPrioritySchema'
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema'
import { LeadCategoryCreateNestedManyWithoutLeadsInputSchema } from './LeadCategoryCreateNestedManyWithoutLeadsInputSchema'
import { UserCreateNestedOneWithoutLeadInputSchema } from './UserCreateNestedOneWithoutLeadInputSchema'
import { ProjectCreateNestedOneWithoutLeadInputSchema } from './ProjectCreateNestedOneWithoutLeadInputSchema'
import { DocumentCreateNestedManyWithoutLeadInputSchema } from './DocumentCreateNestedManyWithoutLeadInputSchema'
import { TagCreateNestedManyWithoutLeadInputSchema } from './TagCreateNestedManyWithoutLeadInputSchema'
import { LeadHistoryCreateNestedManyWithoutLeadInputSchema } from './LeadHistoryCreateNestedManyWithoutLeadInputSchema'
import { LeadContactPreferenceCreateNestedManyWithoutLeadInputSchema } from './LeadContactPreferenceCreateNestedManyWithoutLeadInputSchema'
import { LeadSocialProfileCreateNestedManyWithoutLeadInputSchema } from './LeadSocialProfileCreateNestedManyWithoutLeadInputSchema'
import { LeadCommunicationCreateNestedManyWithoutLeadInputSchema } from './LeadCommunicationCreateNestedManyWithoutLeadInputSchema'
import { LeadDecisionMakerCreateNestedManyWithoutLeadInputSchema } from './LeadDecisionMakerCreateNestedManyWithoutLeadInputSchema'
import { LeadRequirementCreateNestedManyWithoutLeadInputSchema } from './LeadRequirementCreateNestedManyWithoutLeadInputSchema'
import { LeadTimelineCreateNestedManyWithoutLeadInputSchema } from './LeadTimelineCreateNestedManyWithoutLeadInputSchema'
import { LeadCompetitorCreateNestedManyWithoutLeadInputSchema } from './LeadCompetitorCreateNestedManyWithoutLeadInputSchema'
import { LeadRiskCreateNestedManyWithoutLeadInputSchema } from './LeadRiskCreateNestedManyWithoutLeadInputSchema'
import { LeadTouchpointCreateNestedManyWithoutLeadInputSchema } from './LeadTouchpointCreateNestedManyWithoutLeadInputSchema'
import { LeadConsentCreateNestedManyWithoutLeadInputSchema } from './LeadConsentCreateNestedManyWithoutLeadInputSchema'
import { LeadExternalSystemCreateNestedManyWithoutLeadInputSchema } from './LeadExternalSystemCreateNestedManyWithoutLeadInputSchema'
import { LeadTaskCreateNestedManyWithoutLeadInputSchema } from './LeadTaskCreateNestedManyWithoutLeadInputSchema'
import { LeadCompanyDetailsCreateNestedOneWithoutLeadInputSchema } from './LeadCompanyDetailsCreateNestedOneWithoutLeadInputSchema'
import { LeadPersonalDetailsCreateNestedOneWithoutLeadInputSchema } from './LeadPersonalDetailsCreateNestedOneWithoutLeadInputSchema'
import { LeadMetadataCreateNestedManyWithoutLeadInputSchema } from './LeadMetadataCreateNestedManyWithoutLeadInputSchema'
import { LeadLabelCreateNestedManyWithoutLeadInputSchema } from './LeadLabelCreateNestedManyWithoutLeadInputSchema'
import { DealCreateNestedManyWithoutLeadInputSchema } from './DealCreateNestedManyWithoutLeadInputSchema'
import { LeadScoreCreateNestedManyWithoutLeadInputSchema } from './LeadScoreCreateNestedManyWithoutLeadInputSchema'
import { CampaignCreateNestedManyWithoutLeadsInputSchema } from './CampaignCreateNestedManyWithoutLeadsInputSchema'
import { LeadProductFitCreateNestedManyWithoutLeadInputSchema } from './LeadProductFitCreateNestedManyWithoutLeadInputSchema'
import { LeadBudgetCreateNestedManyWithoutLeadInputSchema } from './LeadBudgetCreateNestedManyWithoutLeadInputSchema'
import { LeadSegmentationCreateNestedManyWithoutLeadInputSchema } from './LeadSegmentationCreateNestedManyWithoutLeadInputSchema'
import { LeadFeedbackCreateNestedManyWithoutLeadInputSchema } from './LeadFeedbackCreateNestedManyWithoutLeadInputSchema'
import { LeadNurturingCreateNestedManyWithoutLeadInputSchema } from './LeadNurturingCreateNestedManyWithoutLeadInputSchema'
import { LeadComplianceAuditCreateNestedManyWithoutLeadInputSchema } from './LeadComplianceAuditCreateNestedManyWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisCreateNestedManyWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateNestedManyWithoutLeadInputSchema'

export const LeadCreateWithoutCommentsInputSchema: z.ZodType<Prisma.LeadCreateWithoutCommentsInput> = z
    .object({
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
        categoryTag: z
            .lazy(() => LeadCategoryTagSchema)
            .optional()
            .nullable(),
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
        createdBy: z.string().optional().nullable(),
        updatedBy: z.string().optional().nullable(),
        dataConsent: z.boolean().optional(),
        dataRetention: z.coerce.date().optional().nullable(),
        externalId: z.string().optional().nullable(),
        syncStatus: z.string().optional().nullable(),
        lastSyncedAt: z.coerce.date().optional().nullable(),
        categories: z.lazy(() => LeadCategoryCreateNestedManyWithoutLeadsInputSchema).optional(),
        assignedTo: z.lazy(() => UserCreateNestedOneWithoutLeadInputSchema).optional(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutLeadInputSchema),
        attachments: z.lazy(() => DocumentCreateNestedManyWithoutLeadInputSchema).optional(),
        tags: z.lazy(() => TagCreateNestedManyWithoutLeadInputSchema).optional(),
        history: z.lazy(() => LeadHistoryCreateNestedManyWithoutLeadInputSchema).optional(),
        contactPreferences: z.lazy(() => LeadContactPreferenceCreateNestedManyWithoutLeadInputSchema).optional(),
        socialProfiles: z.lazy(() => LeadSocialProfileCreateNestedManyWithoutLeadInputSchema).optional(),
        communications: z.lazy(() => LeadCommunicationCreateNestedManyWithoutLeadInputSchema).optional(),
        decisionMakers: z.lazy(() => LeadDecisionMakerCreateNestedManyWithoutLeadInputSchema).optional(),
        requirements: z.lazy(() => LeadRequirementCreateNestedManyWithoutLeadInputSchema).optional(),
        timelines: z.lazy(() => LeadTimelineCreateNestedManyWithoutLeadInputSchema).optional(),
        competitors: z.lazy(() => LeadCompetitorCreateNestedManyWithoutLeadInputSchema).optional(),
        risks: z.lazy(() => LeadRiskCreateNestedManyWithoutLeadInputSchema).optional(),
        touchpoints: z.lazy(() => LeadTouchpointCreateNestedManyWithoutLeadInputSchema).optional(),
        consents: z.lazy(() => LeadConsentCreateNestedManyWithoutLeadInputSchema).optional(),
        externalSystems: z.lazy(() => LeadExternalSystemCreateNestedManyWithoutLeadInputSchema).optional(),
        leadTasks: z.lazy(() => LeadTaskCreateNestedManyWithoutLeadInputSchema).optional(),
        companyDetails: z.lazy(() => LeadCompanyDetailsCreateNestedOneWithoutLeadInputSchema).optional(),
        personalDetails: z.lazy(() => LeadPersonalDetailsCreateNestedOneWithoutLeadInputSchema).optional(),
        metadata: z.lazy(() => LeadMetadataCreateNestedManyWithoutLeadInputSchema).optional(),
        labels: z.lazy(() => LeadLabelCreateNestedManyWithoutLeadInputSchema).optional(),
        deals: z.lazy(() => DealCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadScore: z.lazy(() => LeadScoreCreateNestedManyWithoutLeadInputSchema).optional(),
        Campaign: z.lazy(() => CampaignCreateNestedManyWithoutLeadsInputSchema).optional(),
        LeadProductFit: z.lazy(() => LeadProductFitCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadBudget: z.lazy(() => LeadBudgetCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadSegmentation: z.lazy(() => LeadSegmentationCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadFeedback: z.lazy(() => LeadFeedbackCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadNurturing: z.lazy(() => LeadNurturingCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadComplianceAudit: z.lazy(() => LeadComplianceAuditCreateNestedManyWithoutLeadInputSchema).optional(),
        LeadCompetitiveAnalysis: z.lazy(() => LeadCompetitiveAnalysisCreateNestedManyWithoutLeadInputSchema).optional()
    })
    .strict()

export default LeadCreateWithoutCommentsInputSchema
