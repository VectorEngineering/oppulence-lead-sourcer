import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const YearInReviewCreateManyInputSchema: z.ZodType<Prisma.YearInReviewCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        year: z.number().int(),
        totalLinks: z.number().int(),
        totalClicks: z.number().int(),
        topLinks: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        topCountries: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        workspaceId: z.string(),
        createdAt: z.coerce.date().optional(),
        sentAt: z.coerce.date().optional().nullable()
    })
    .strict()

export default YearInReviewCreateManyInputSchema
