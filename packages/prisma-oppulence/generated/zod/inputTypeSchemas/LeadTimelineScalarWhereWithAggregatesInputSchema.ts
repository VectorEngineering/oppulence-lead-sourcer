import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'

export const LeadTimelineScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadTimelineScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadTimelineScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadTimelineScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadTimelineScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadTimelineScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadTimelineScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        milestone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        targetDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        actualDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        notes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LeadTimelineScalarWhereWithAggregatesInputSchema
