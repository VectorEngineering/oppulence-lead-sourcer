import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetExpenseWhereInputSchema } from './LeadBudgetExpenseWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadBudgetRelationFilterSchema } from './LeadBudgetRelationFilterSchema'
import { LeadBudgetWhereInputSchema } from './LeadBudgetWhereInputSchema'

export const LeadBudgetExpenseWhereUniqueInputSchema: z.ZodType<Prisma.LeadBudgetExpenseWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => LeadBudgetExpenseWhereInputSchema), z.lazy(() => LeadBudgetExpenseWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => LeadBudgetExpenseWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => LeadBudgetExpenseWhereInputSchema), z.lazy(() => LeadBudgetExpenseWhereInputSchema).array()])
                    .optional(),
                budgetId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                amount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
                category: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                receipt: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                expenseDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                budget: z.union([z.lazy(() => LeadBudgetRelationFilterSchema), z.lazy(() => LeadBudgetWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadBudgetExpenseWhereUniqueInputSchema
