import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadIncludeSchema } from '../inputTypeSchemas/LeadIncludeSchema'
import { LeadWhereUniqueInputSchema } from '../inputTypeSchemas/LeadWhereUniqueInputSchema'
import { LeadCategoryFindManyArgsSchema } from './LeadCategoryFindManyArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { DocumentFindManyArgsSchema } from './DocumentFindManyArgsSchema'
import { TagFindManyArgsSchema } from './TagFindManyArgsSchema'
import { LeadCommentFindManyArgsSchema } from './LeadCommentFindManyArgsSchema'
import { LeadHistoryFindManyArgsSchema } from './LeadHistoryFindManyArgsSchema'
import { LeadContactPreferenceFindManyArgsSchema } from './LeadContactPreferenceFindManyArgsSchema'
import { LeadSocialProfileFindManyArgsSchema } from './LeadSocialProfileFindManyArgsSchema'
import { LeadCommunicationFindManyArgsSchema } from './LeadCommunicationFindManyArgsSchema'
import { LeadDecisionMakerFindManyArgsSchema } from './LeadDecisionMakerFindManyArgsSchema'
import { LeadRequirementFindManyArgsSchema } from './LeadRequirementFindManyArgsSchema'
import { LeadTimelineFindManyArgsSchema } from './LeadTimelineFindManyArgsSchema'
import { LeadCompetitorFindManyArgsSchema } from './LeadCompetitorFindManyArgsSchema'
import { LeadRiskFindManyArgsSchema } from './LeadRiskFindManyArgsSchema'
import { LeadTouchpointFindManyArgsSchema } from './LeadTouchpointFindManyArgsSchema'
import { LeadConsentFindManyArgsSchema } from './LeadConsentFindManyArgsSchema'
import { LeadExternalSystemFindManyArgsSchema } from './LeadExternalSystemFindManyArgsSchema'
import { LeadTaskFindManyArgsSchema } from './LeadTaskFindManyArgsSchema'
import { LeadCompanyDetailsArgsSchema } from './LeadCompanyDetailsArgsSchema'
import { LeadPersonalDetailsArgsSchema } from './LeadPersonalDetailsArgsSchema'
import { LeadMetadataFindManyArgsSchema } from './LeadMetadataFindManyArgsSchema'
import { LeadLabelFindManyArgsSchema } from './LeadLabelFindManyArgsSchema'
import { DealFindManyArgsSchema } from './DealFindManyArgsSchema'
import { LeadScoreFindManyArgsSchema } from './LeadScoreFindManyArgsSchema'
import { CampaignFindManyArgsSchema } from './CampaignFindManyArgsSchema'
import { LeadProductFitFindManyArgsSchema } from './LeadProductFitFindManyArgsSchema'
import { LeadBudgetFindManyArgsSchema } from './LeadBudgetFindManyArgsSchema'
import { LeadSegmentationFindManyArgsSchema } from './LeadSegmentationFindManyArgsSchema'
import { LeadFeedbackFindManyArgsSchema } from './LeadFeedbackFindManyArgsSchema'
import { LeadNurturingFindManyArgsSchema } from './LeadNurturingFindManyArgsSchema'
import { LeadComplianceAuditFindManyArgsSchema } from './LeadComplianceAuditFindManyArgsSchema'
import { LeadCompetitiveAnalysisFindManyArgsSchema } from './LeadCompetitiveAnalysisFindManyArgsSchema'
import { LeadCountOutputTypeArgsSchema } from './LeadCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSelectSchema: z.ZodType<Prisma.LeadSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        note: z.boolean().optional(),
        internalNotes: z.boolean().optional(),
        reference: z.boolean().optional(),
        amount: z.boolean().optional(),
        probability: z.boolean().optional(),
        weightedAmount: z.boolean().optional(),
        actualAmount: z.boolean().optional(),
        leadSource: z.boolean().optional(),
        stage: z.boolean().optional(),
        verificationStatus: z.boolean().optional(),
        priority: z.boolean().optional(),
        categoryTag: z.boolean().optional(),
        closeDate: z.boolean().optional(),
        nextFollowUp: z.boolean().optional(),
        lastContactDate: z.boolean().optional(),
        contactName: z.boolean().optional(),
        contactEmail: z.boolean().optional(),
        contactPhone: z.boolean().optional(),
        contactTitle: z.boolean().optional(),
        company: z.boolean().optional(),
        industry: z.boolean().optional(),
        pipelineStage: z.boolean().optional(),
        salesRep: z.boolean().optional(),
        territory: z.boolean().optional(),
        winReason: z.boolean().optional(),
        lossReason: z.boolean().optional(),
        date: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        archivedAt: z.boolean().optional(),
        convertedAt: z.boolean().optional(),
        qualifiedAt: z.boolean().optional(),
        closedAt: z.boolean().optional(),
        lastActivity: z.boolean().optional(),
        nextAction: z.boolean().optional(),
        followUpStatus: z.boolean().optional(),
        engagementScore: z.boolean().optional(),
        assignedId: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        projectId: z.boolean().optional(),
        dataConsent: z.boolean().optional(),
        dataRetention: z.boolean().optional(),
        externalId: z.boolean().optional(),
        syncStatus: z.boolean().optional(),
        lastSyncedAt: z.boolean().optional(),
        categories: z.union([z.boolean(), z.lazy(() => LeadCategoryFindManyArgsSchema)]).optional(),
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        attachments: z.union([z.boolean(), z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
        tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
        comments: z.union([z.boolean(), z.lazy(() => LeadCommentFindManyArgsSchema)]).optional(),
        history: z.union([z.boolean(), z.lazy(() => LeadHistoryFindManyArgsSchema)]).optional(),
        contactPreferences: z.union([z.boolean(), z.lazy(() => LeadContactPreferenceFindManyArgsSchema)]).optional(),
        socialProfiles: z.union([z.boolean(), z.lazy(() => LeadSocialProfileFindManyArgsSchema)]).optional(),
        communications: z.union([z.boolean(), z.lazy(() => LeadCommunicationFindManyArgsSchema)]).optional(),
        decisionMakers: z.union([z.boolean(), z.lazy(() => LeadDecisionMakerFindManyArgsSchema)]).optional(),
        requirements: z.union([z.boolean(), z.lazy(() => LeadRequirementFindManyArgsSchema)]).optional(),
        timelines: z.union([z.boolean(), z.lazy(() => LeadTimelineFindManyArgsSchema)]).optional(),
        competitors: z.union([z.boolean(), z.lazy(() => LeadCompetitorFindManyArgsSchema)]).optional(),
        risks: z.union([z.boolean(), z.lazy(() => LeadRiskFindManyArgsSchema)]).optional(),
        touchpoints: z.union([z.boolean(), z.lazy(() => LeadTouchpointFindManyArgsSchema)]).optional(),
        consents: z.union([z.boolean(), z.lazy(() => LeadConsentFindManyArgsSchema)]).optional(),
        externalSystems: z.union([z.boolean(), z.lazy(() => LeadExternalSystemFindManyArgsSchema)]).optional(),
        leadTasks: z.union([z.boolean(), z.lazy(() => LeadTaskFindManyArgsSchema)]).optional(),
        companyDetails: z.union([z.boolean(), z.lazy(() => LeadCompanyDetailsArgsSchema)]).optional(),
        personalDetails: z.union([z.boolean(), z.lazy(() => LeadPersonalDetailsArgsSchema)]).optional(),
        metadata: z.union([z.boolean(), z.lazy(() => LeadMetadataFindManyArgsSchema)]).optional(),
        labels: z.union([z.boolean(), z.lazy(() => LeadLabelFindManyArgsSchema)]).optional(),
        deals: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        LeadScore: z.union([z.boolean(), z.lazy(() => LeadScoreFindManyArgsSchema)]).optional(),
        Campaign: z.union([z.boolean(), z.lazy(() => CampaignFindManyArgsSchema)]).optional(),
        LeadProductFit: z.union([z.boolean(), z.lazy(() => LeadProductFitFindManyArgsSchema)]).optional(),
        LeadBudget: z.union([z.boolean(), z.lazy(() => LeadBudgetFindManyArgsSchema)]).optional(),
        LeadSegmentation: z.union([z.boolean(), z.lazy(() => LeadSegmentationFindManyArgsSchema)]).optional(),
        LeadFeedback: z.union([z.boolean(), z.lazy(() => LeadFeedbackFindManyArgsSchema)]).optional(),
        LeadNurturing: z.union([z.boolean(), z.lazy(() => LeadNurturingFindManyArgsSchema)]).optional(),
        LeadComplianceAudit: z.union([z.boolean(), z.lazy(() => LeadComplianceAuditFindManyArgsSchema)]).optional(),
        LeadCompetitiveAnalysis: z.union([z.boolean(), z.lazy(() => LeadCompetitiveAnalysisFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadDeleteArgsSchema: z.ZodType<Prisma.LeadDeleteArgs> = z
    .object({
        select: LeadSelectSchema.optional(),
        include: LeadIncludeSchema.optional(),
        where: LeadWhereUniqueInputSchema
    })
    .strict()

export default LeadDeleteArgsSchema
