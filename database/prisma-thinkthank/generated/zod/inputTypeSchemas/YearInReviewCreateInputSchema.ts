import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { ProjectCreateNestedOneWithoutYearInReviewsInputSchema } from './ProjectCreateNestedOneWithoutYearInReviewsInputSchema'

export const YearInReviewCreateInputSchema: z.ZodType<Prisma.YearInReviewCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        year: z.number().int(),
        totalLinks: z.number().int(),
        totalClicks: z.number().int(),
        topLinks: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        topCountries: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        createdAt: z.coerce.date().optional(),
        sentAt: z.coerce.date().optional().nullable(),
        workspace: z.lazy(() => ProjectCreateNestedOneWithoutYearInReviewsInputSchema)
    })
    .strict()

export default YearInReviewCreateInputSchema
