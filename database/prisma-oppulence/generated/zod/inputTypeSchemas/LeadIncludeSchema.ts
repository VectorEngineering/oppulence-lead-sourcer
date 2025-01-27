import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCategoryFindManyArgsSchema } from '../outputTypeSchemas/LeadCategoryFindManyArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { DocumentFindManyArgsSchema } from '../outputTypeSchemas/DocumentFindManyArgsSchema'
import { TagFindManyArgsSchema } from '../outputTypeSchemas/TagFindManyArgsSchema'
import { LeadCommentFindManyArgsSchema } from '../outputTypeSchemas/LeadCommentFindManyArgsSchema'
import { LeadHistoryFindManyArgsSchema } from '../outputTypeSchemas/LeadHistoryFindManyArgsSchema'
import { LeadContactPreferenceFindManyArgsSchema } from '../outputTypeSchemas/LeadContactPreferenceFindManyArgsSchema'
import { LeadSocialProfileFindManyArgsSchema } from '../outputTypeSchemas/LeadSocialProfileFindManyArgsSchema'
import { LeadCommunicationFindManyArgsSchema } from '../outputTypeSchemas/LeadCommunicationFindManyArgsSchema'
import { LeadDecisionMakerFindManyArgsSchema } from '../outputTypeSchemas/LeadDecisionMakerFindManyArgsSchema'
import { LeadRequirementFindManyArgsSchema } from '../outputTypeSchemas/LeadRequirementFindManyArgsSchema'
import { LeadTimelineFindManyArgsSchema } from '../outputTypeSchemas/LeadTimelineFindManyArgsSchema'
import { LeadCompetitorFindManyArgsSchema } from '../outputTypeSchemas/LeadCompetitorFindManyArgsSchema'
import { LeadRiskFindManyArgsSchema } from '../outputTypeSchemas/LeadRiskFindManyArgsSchema'
import { LeadTouchpointFindManyArgsSchema } from '../outputTypeSchemas/LeadTouchpointFindManyArgsSchema'
import { LeadConsentFindManyArgsSchema } from '../outputTypeSchemas/LeadConsentFindManyArgsSchema'
import { LeadExternalSystemFindManyArgsSchema } from '../outputTypeSchemas/LeadExternalSystemFindManyArgsSchema'
import { LeadTaskFindManyArgsSchema } from '../outputTypeSchemas/LeadTaskFindManyArgsSchema'
import { LeadCompanyDetailsArgsSchema } from '../outputTypeSchemas/LeadCompanyDetailsArgsSchema'
import { LeadPersonalDetailsArgsSchema } from '../outputTypeSchemas/LeadPersonalDetailsArgsSchema'
import { LeadMetadataFindManyArgsSchema } from '../outputTypeSchemas/LeadMetadataFindManyArgsSchema'
import { LeadLabelFindManyArgsSchema } from '../outputTypeSchemas/LeadLabelFindManyArgsSchema'
import { DealFindManyArgsSchema } from '../outputTypeSchemas/DealFindManyArgsSchema'
import { LeadScoreFindManyArgsSchema } from '../outputTypeSchemas/LeadScoreFindManyArgsSchema'
import { CampaignFindManyArgsSchema } from '../outputTypeSchemas/CampaignFindManyArgsSchema'
import { LeadProductFitFindManyArgsSchema } from '../outputTypeSchemas/LeadProductFitFindManyArgsSchema'
import { LeadBudgetFindManyArgsSchema } from '../outputTypeSchemas/LeadBudgetFindManyArgsSchema'
import { LeadSegmentationFindManyArgsSchema } from '../outputTypeSchemas/LeadSegmentationFindManyArgsSchema'
import { LeadFeedbackFindManyArgsSchema } from '../outputTypeSchemas/LeadFeedbackFindManyArgsSchema'
import { LeadNurturingFindManyArgsSchema } from '../outputTypeSchemas/LeadNurturingFindManyArgsSchema'
import { LeadComplianceAuditFindManyArgsSchema } from '../outputTypeSchemas/LeadComplianceAuditFindManyArgsSchema'
import { LeadCompetitiveAnalysisFindManyArgsSchema } from '../outputTypeSchemas/LeadCompetitiveAnalysisFindManyArgsSchema'
import { LeadCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadCountOutputTypeArgsSchema'

export const LeadIncludeSchema: z.ZodType<Prisma.LeadInclude> = z
    .object({
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

export default LeadIncludeSchema
