import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema'

export const NestedEnumDealCompetitorStatusNullableFilterSchema: z.ZodType<Prisma.NestedEnumDealCompetitorStatusNullableFilter> = z
    .object({
        equals: z
            .lazy(() => DealCompetitorStatusSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => DealCompetitorStatusSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => DealCompetitorStatusSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => DealCompetitorStatusSchema), z.lazy(() => NestedEnumDealCompetitorStatusNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumDealCompetitorStatusNullableFilterSchema
