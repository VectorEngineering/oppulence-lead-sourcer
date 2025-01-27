import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'

export const LeadContactPreferenceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadContactPreferenceScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => LeadContactPreferenceScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => LeadContactPreferenceScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => LeadContactPreferenceScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => LeadContactPreferenceScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => LeadContactPreferenceScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            method: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            preferredTime: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            preferredDays: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            timezone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            notes: z
                .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
                .optional()
                .nullable(),
            isActive: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional()
        })
        .strict()

export default LeadContactPreferenceScalarWhereWithAggregatesInputSchema
