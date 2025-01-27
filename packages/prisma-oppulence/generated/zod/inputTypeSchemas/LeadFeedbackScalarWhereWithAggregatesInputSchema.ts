import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumFeedbackTypeWithAggregatesFilterSchema } from './EnumFeedbackTypeWithAggregatesFilterSchema'
import { FeedbackTypeSchema } from './FeedbackTypeSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { EnumFeedbackStatusWithAggregatesFilterSchema } from './EnumFeedbackStatusWithAggregatesFilterSchema'
import { FeedbackStatusSchema } from './FeedbackStatusSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadFeedbackScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadFeedbackScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadFeedbackScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadFeedbackScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadFeedbackScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadFeedbackScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadFeedbackScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumFeedbackTypeWithAggregatesFilterSchema), z.lazy(() => FeedbackTypeSchema)]).optional(),
        source: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        sentiment: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        score: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        category: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        subCategory: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        requiresFollowUp: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        followUpAssignee: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        followUpStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        followUpNotes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumFeedbackStatusWithAggregatesFilterSchema), z.lazy(() => FeedbackStatusSchema)]).optional(),
        resolution: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        resolvedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        resolvedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadFeedbackScalarWhereWithAggregatesInputSchema
