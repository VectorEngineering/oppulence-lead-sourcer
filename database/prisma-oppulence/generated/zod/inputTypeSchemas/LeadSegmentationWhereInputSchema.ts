import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadSegmentationHistoryListRelationFilterSchema } from './LeadSegmentationHistoryListRelationFilterSchema'

export const LeadSegmentationWhereInputSchema: z.ZodType<Prisma.LeadSegmentationWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadSegmentationWhereInputSchema), z.lazy(() => LeadSegmentationWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadSegmentationWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadSegmentationWhereInputSchema), z.lazy(() => LeadSegmentationWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        industrySegment: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        companySize: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        geographicRegion: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        purchaseHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
        productUsage: z.lazy(() => JsonNullableFilterSchema).optional(),
        engagementLevel: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        decisionMaking: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        innovationLevel: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        riskTolerance: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        customerLifetimeValue: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        profitabilitySegment: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        growthPotential: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        segmentTags: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional(),
        segmentationHistory: z.lazy(() => LeadSegmentationHistoryListRelationFilterSchema).optional()
    })
    .strict()

export default LeadSegmentationWhereInputSchema
