import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'

export const LeadCompetitorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadCompetitorScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadCompetitorScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadCompetitorScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadCompetitorScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadCompetitorScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadCompetitorScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        strengths: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        weaknesses: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        pricing: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        differentiator: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict()

export default LeadCompetitorScalarWhereWithAggregatesInputSchema
