import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadScoreHistoryScalarWhereInputSchema: z.ZodType<Prisma.LeadScoreHistoryScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadScoreHistoryScalarWhereInputSchema), z.lazy(() => LeadScoreHistoryScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadScoreHistoryScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadScoreHistoryScalarWhereInputSchema), z.lazy(() => LeadScoreHistoryScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadScoreId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        previousScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        newScore: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        changeReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        timestamp: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadScoreHistoryScalarWhereInputSchema
