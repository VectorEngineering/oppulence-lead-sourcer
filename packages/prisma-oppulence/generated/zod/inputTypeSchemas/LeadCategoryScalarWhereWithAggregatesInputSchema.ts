import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadCategoryScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadCategoryScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadCategoryScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadCategoryScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadCategoryScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadCategoryScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        color: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        icon: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        parentId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        path: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        level: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        isSystem: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        isActive: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        budgetLimit: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        warningThreshold: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        trackingEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        vatRate: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        taxCode: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        taxDeductible: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadCategoryScalarWhereWithAggregatesInputSchema
