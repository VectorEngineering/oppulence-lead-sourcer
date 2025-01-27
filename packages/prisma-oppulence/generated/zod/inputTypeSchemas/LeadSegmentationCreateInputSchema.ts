import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadCreateNestedOneWithoutLeadSegmentationInputSchema } from './LeadCreateNestedOneWithoutLeadSegmentationInputSchema'
import { LeadSegmentationHistoryCreateNestedManyWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateNestedManyWithoutSegmentationInputSchema'

export const LeadSegmentationCreateInputSchema: z.ZodType<Prisma.LeadSegmentationCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        industrySegment: z.string(),
        companySize: z.string(),
        geographicRegion: z.string(),
        purchaseHistory: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        productUsage: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        engagementLevel: z.string(),
        decisionMaking: z.string(),
        innovationLevel: z.string(),
        riskTolerance: z.string(),
        customerLifetimeValue: z.number().optional().nullable(),
        profitabilitySegment: z.string(),
        growthPotential: z.string(),
        segmentTags: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutLeadSegmentationInputSchema),
        segmentationHistory: z.lazy(() => LeadSegmentationHistoryCreateNestedManyWithoutSegmentationInputSchema).optional()
    })
    .strict()

export default LeadSegmentationCreateInputSchema
