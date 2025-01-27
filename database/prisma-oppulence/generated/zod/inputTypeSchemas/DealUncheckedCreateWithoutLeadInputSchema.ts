import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealStatusSchema } from './DealStatusSchema'
import { DealPrioritySchema } from './DealPrioritySchema'
import { MarketingChannelSchema } from './MarketingChannelSchema'
import { DealActivityUncheckedCreateNestedManyWithoutDealInputSchema } from './DealActivityUncheckedCreateNestedManyWithoutDealInputSchema'
import { DealProductUncheckedCreateNestedManyWithoutDealInputSchema } from './DealProductUncheckedCreateNestedManyWithoutDealInputSchema'
import { DealCompetitorUncheckedCreateNestedManyWithoutDealInputSchema } from './DealCompetitorUncheckedCreateNestedManyWithoutDealInputSchema'
import { DocumentUncheckedCreateNestedManyWithoutDealInputSchema } from './DocumentUncheckedCreateNestedManyWithoutDealInputSchema'
import { DealTaskUncheckedCreateNestedManyWithoutDealInputSchema } from './DealTaskUncheckedCreateNestedManyWithoutDealInputSchema'
import { DealHistoryUncheckedCreateNestedManyWithoutDealInputSchema } from './DealHistoryUncheckedCreateNestedManyWithoutDealInputSchema'

export const DealUncheckedCreateWithoutLeadInputSchema: z.ZodType<Prisma.DealUncheckedCreateWithoutLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        pipelineId: z.string(),
        stageId: z.string(),
        status: z.lazy(() => DealStatusSchema).optional(),
        priority: z.lazy(() => DealPrioritySchema).optional(),
        value: z.number(),
        currency: z.string().optional(),
        probability: z.number().optional().nullable(),
        expectedRevenue: z.number().optional().nullable(),
        dealCategory: z.string().optional().nullable(),
        dealFocus: z.string().optional().nullable(),
        synergyPotential: z.number().optional().nullable(),
        synergyDescription: z.string().optional().nullable(),
        complianceCheck: z.boolean().optional().nullable(),
        complianceNotes: z.string().optional().nullable(),
        estimatedProfitMargin: z.number().optional().nullable(),
        discountReason: z.string().optional().nullable(),
        closingStrategy: z.string().optional().nullable(),
        marketingChannel: z
            .lazy(() => MarketingChannelSchema)
            .optional()
            .nullable(),
        leadRating: z.string().optional().nullable(),
        startDate: z.coerce.date().optional().nullable(),
        closeDate: z.coerce.date().optional().nullable(),
        actualCloseDate: z.coerce.date().optional().nullable(),
        progress: z.number().int().optional(),
        reason: z.string().optional().nullable(),
        notes: z.string().optional().nullable(),
        assignedToId: z.string().optional().nullable(),
        projectId: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        archivedAt: z.coerce.date().optional().nullable(),
        createdBy: z.string().optional().nullable(),
        updatedBy: z.string().optional().nullable(),
        activities: z.lazy(() => DealActivityUncheckedCreateNestedManyWithoutDealInputSchema).optional(),
        products: z.lazy(() => DealProductUncheckedCreateNestedManyWithoutDealInputSchema).optional(),
        competitors: z.lazy(() => DealCompetitorUncheckedCreateNestedManyWithoutDealInputSchema).optional(),
        attachments: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutDealInputSchema).optional(),
        tasks: z.lazy(() => DealTaskUncheckedCreateNestedManyWithoutDealInputSchema).optional(),
        history: z.lazy(() => DealHistoryUncheckedCreateNestedManyWithoutDealInputSchema).optional()
    })
    .strict()

export default DealUncheckedCreateWithoutLeadInputSchema
