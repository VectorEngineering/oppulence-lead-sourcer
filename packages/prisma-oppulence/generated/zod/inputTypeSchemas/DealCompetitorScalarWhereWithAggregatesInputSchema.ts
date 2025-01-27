import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumDealCompetitorStatusNullableWithAggregatesFilterSchema } from './EnumDealCompetitorStatusNullableWithAggregatesFilterSchema'
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema'
import { EnumDealCompetitorThreatLevelNullableWithAggregatesFilterSchema } from './EnumDealCompetitorThreatLevelNullableWithAggregatesFilterSchema'
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const DealCompetitorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DealCompetitorScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => DealCompetitorScalarWhereWithAggregatesInputSchema),
                z.lazy(() => DealCompetitorScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => DealCompetitorScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => DealCompetitorScalarWhereWithAggregatesInputSchema),
                z.lazy(() => DealCompetitorScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        strengths: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        weaknesses: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        strategy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => EnumDealCompetitorStatusNullableWithAggregatesFilterSchema), z.lazy(() => DealCompetitorStatusSchema)])
            .optional()
            .nullable(),
        threatLevel: z
            .union([
                z.lazy(() => EnumDealCompetitorThreatLevelNullableWithAggregatesFilterSchema),
                z.lazy(() => DealCompetitorThreatLevelSchema)
            ])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default DealCompetitorScalarWhereWithAggregatesInputSchema
