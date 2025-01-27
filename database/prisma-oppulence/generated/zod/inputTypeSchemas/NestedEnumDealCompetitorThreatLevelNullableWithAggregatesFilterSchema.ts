import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumDealCompetitorThreatLevelNullableFilterSchema } from './NestedEnumDealCompetitorThreatLevelNullableFilterSchema'

export const NestedEnumDealCompetitorThreatLevelNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDealCompetitorThreatLevelNullableWithAggregatesFilter> =
    z
        .object({
            equals: z
                .lazy(() => DealCompetitorThreatLevelSchema)
                .optional()
                .nullable(),
            in: z
                .lazy(() => DealCompetitorThreatLevelSchema)
                .array()
                .optional()
                .nullable(),
            notIn: z
                .lazy(() => DealCompetitorThreatLevelSchema)
                .array()
                .optional()
                .nullable(),
            not: z
                .union([
                    z.lazy(() => DealCompetitorThreatLevelSchema),
                    z.lazy(() => NestedEnumDealCompetitorThreatLevelNullableWithAggregatesFilterSchema)
                ])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumDealCompetitorThreatLevelNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumDealCompetitorThreatLevelNullableFilterSchema).optional()
        })
        .strict()

export default NestedEnumDealCompetitorThreatLevelNullableWithAggregatesFilterSchema
