import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadBudgetRevisionScalarWhereInputSchema: z.ZodType<Prisma.LeadBudgetRevisionScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema), z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadBudgetRevisionScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema), z.lazy(() => LeadBudgetRevisionScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        budgetId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        previousAmount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        newAmount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        reason: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        approvedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadBudgetRevisionScalarWhereInputSchema
