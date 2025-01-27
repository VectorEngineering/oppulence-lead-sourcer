import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'

export const AutomationActionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AutomationActionScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => AutomationActionScalarWhereWithAggregatesInputSchema),
                z.lazy(() => AutomationActionScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => AutomationActionScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AutomationActionScalarWhereWithAggregatesInputSchema),
                z.lazy(() => AutomationActionScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        automationId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        template: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default AutomationActionScalarWhereWithAggregatesInputSchema
