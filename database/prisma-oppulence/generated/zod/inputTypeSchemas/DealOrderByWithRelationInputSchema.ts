import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema'
import { PipelineStageOrderByWithRelationInputSchema } from './PipelineStageOrderByWithRelationInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { DealActivityOrderByRelationAggregateInputSchema } from './DealActivityOrderByRelationAggregateInputSchema'
import { DealProductOrderByRelationAggregateInputSchema } from './DealProductOrderByRelationAggregateInputSchema'
import { DealCompetitorOrderByRelationAggregateInputSchema } from './DealCompetitorOrderByRelationAggregateInputSchema'
import { DocumentOrderByRelationAggregateInputSchema } from './DocumentOrderByRelationAggregateInputSchema'
import { DealTaskOrderByRelationAggregateInputSchema } from './DealTaskOrderByRelationAggregateInputSchema'
import { DealHistoryOrderByRelationAggregateInputSchema } from './DealHistoryOrderByRelationAggregateInputSchema'
import { DealOrderByRelevanceInputSchema } from './DealOrderByRelevanceInputSchema'

export const DealOrderByWithRelationInputSchema: z.ZodType<Prisma.DealOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        stageId: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        currency: z.lazy(() => SortOrderSchema).optional(),
        probability: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        expectedRevenue: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        dealCategory: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        dealFocus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        synergyPotential: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        synergyDescription: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        complianceCheck: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        complianceNotes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        estimatedProfitMargin: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        discountReason: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        closingStrategy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        marketingChannel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        leadRating: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        startDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        closeDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        actualCloseDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        progress: z.lazy(() => SortOrderSchema).optional(),
        reason: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        notes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        assignedToId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        archivedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        updatedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        assignedTo: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
        stage: z.lazy(() => PipelineStageOrderByWithRelationInputSchema).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        activities: z.lazy(() => DealActivityOrderByRelationAggregateInputSchema).optional(),
        products: z.lazy(() => DealProductOrderByRelationAggregateInputSchema).optional(),
        competitors: z.lazy(() => DealCompetitorOrderByRelationAggregateInputSchema).optional(),
        attachments: z.lazy(() => DocumentOrderByRelationAggregateInputSchema).optional(),
        tasks: z.lazy(() => DealTaskOrderByRelationAggregateInputSchema).optional(),
        history: z.lazy(() => DealHistoryOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => DealOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default DealOrderByWithRelationInputSchema
