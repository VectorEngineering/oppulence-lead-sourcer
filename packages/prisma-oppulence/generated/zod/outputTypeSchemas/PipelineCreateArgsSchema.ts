import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineIncludeSchema } from '../inputTypeSchemas/PipelineIncludeSchema'
import { PipelineCreateInputSchema } from '../inputTypeSchemas/PipelineCreateInputSchema'
import { PipelineUncheckedCreateInputSchema } from '../inputTypeSchemas/PipelineUncheckedCreateInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { PipelineStageFindManyArgsSchema } from './PipelineStageFindManyArgsSchema'
import { DealFindManyArgsSchema } from './DealFindManyArgsSchema'
import { PipelineKpiFindManyArgsSchema } from './PipelineKpiFindManyArgsSchema'
import { PipelineAutomationFindManyArgsSchema } from './PipelineAutomationFindManyArgsSchema'
import { StageDurationFindManyArgsSchema } from './StageDurationFindManyArgsSchema'
import { PipelineIntegrationFindManyArgsSchema } from './PipelineIntegrationFindManyArgsSchema'
import { PipelineAccessRuleFindManyArgsSchema } from './PipelineAccessRuleFindManyArgsSchema'
import { PipelineCountOutputTypeArgsSchema } from './PipelineCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineSelectSchema: z.ZodType<Prisma.PipelineSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        slug: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        isActive: z.boolean().optional(),
        isDefault: z.boolean().optional(),
        icon: z.boolean().optional(),
        color: z.boolean().optional(),
        currency: z.boolean().optional(),
        defaultStageId: z.boolean().optional(),
        pipelineFocus: z.boolean().optional(),
        pipelineSegment: z.boolean().optional(),
        pipelineCategory: z.boolean().optional(),
        pipelineGoal: z.boolean().optional(),
        typicalSalesCycle: z.boolean().optional(),
        averageDealSize: z.boolean().optional(),
        averageCloseRate: z.boolean().optional(),
        minimumDealSize: z.boolean().optional(),
        maximumDealSize: z.boolean().optional(),
        targetMarket: z.boolean().optional(),
        salesMethodology: z.boolean().optional(),
        qualificationCriteria: z.boolean().optional(),
        forecastingMethod: z.boolean().optional(),
        confidenceScore: z.boolean().optional(),
        revenueTarget: z.boolean().optional(),
        dealCountTarget: z.boolean().optional(),
        complianceLevel: z.boolean().optional(),
        securityTier: z.boolean().optional(),
        dataRetention: z.boolean().optional(),
        visibilityLevel: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        archivedAt: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        stages: z.union([z.boolean(), z.lazy(() => PipelineStageFindManyArgsSchema)]).optional(),
        deals: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        kpis: z.union([z.boolean(), z.lazy(() => PipelineKpiFindManyArgsSchema)]).optional(),
        automations: z.union([z.boolean(), z.lazy(() => PipelineAutomationFindManyArgsSchema)]).optional(),
        stageDurations: z.union([z.boolean(), z.lazy(() => StageDurationFindManyArgsSchema)]).optional(),
        integrations: z.union([z.boolean(), z.lazy(() => PipelineIntegrationFindManyArgsSchema)]).optional(),
        accessRules: z.union([z.boolean(), z.lazy(() => PipelineAccessRuleFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const PipelineCreateArgsSchema: z.ZodType<Prisma.PipelineCreateArgs> = z
    .object({
        select: PipelineSelectSchema.optional(),
        include: PipelineIncludeSchema.optional(),
        data: z.union([PipelineCreateInputSchema, PipelineUncheckedCreateInputSchema])
    })
    .strict()

export default PipelineCreateArgsSchema
