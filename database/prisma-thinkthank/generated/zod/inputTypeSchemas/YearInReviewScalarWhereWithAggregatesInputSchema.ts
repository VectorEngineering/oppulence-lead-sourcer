import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'

export const YearInReviewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.YearInReviewScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => YearInReviewScalarWhereWithAggregatesInputSchema),
                z.lazy(() => YearInReviewScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => YearInReviewScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => YearInReviewScalarWhereWithAggregatesInputSchema),
                z.lazy(() => YearInReviewScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        year: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        totalLinks: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        totalClicks: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        topLinks: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        topCountries: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        sentAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default YearInReviewScalarWhereWithAggregatesInputSchema
