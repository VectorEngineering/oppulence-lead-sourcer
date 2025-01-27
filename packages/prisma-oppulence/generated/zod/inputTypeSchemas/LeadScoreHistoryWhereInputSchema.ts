import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadScoreRelationFilterSchema } from './LeadScoreRelationFilterSchema'
import { LeadScoreWhereInputSchema } from './LeadScoreWhereInputSchema'

export const LeadScoreHistoryWhereInputSchema: z.ZodType<Prisma.LeadScoreHistoryWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadScoreHistoryWhereInputSchema), z.lazy(() => LeadScoreHistoryWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadScoreHistoryWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadScoreHistoryWhereInputSchema), z.lazy(() => LeadScoreHistoryWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadScoreId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        previousScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        newScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        changeReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        timestamp: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        leadScore: z.union([z.lazy(() => LeadScoreRelationFilterSchema), z.lazy(() => LeadScoreWhereInputSchema)]).optional()
    })
    .strict()

export default LeadScoreHistoryWhereInputSchema
