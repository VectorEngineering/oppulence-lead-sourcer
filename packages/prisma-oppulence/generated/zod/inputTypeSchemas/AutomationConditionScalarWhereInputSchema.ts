import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'

export const AutomationConditionScalarWhereInputSchema: z.ZodType<Prisma.AutomationConditionScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => AutomationConditionScalarWhereInputSchema),
                z.lazy(() => AutomationConditionScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => AutomationConditionScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AutomationConditionScalarWhereInputSchema),
                z.lazy(() => AutomationConditionScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        automationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        operator: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict()

export default AutomationConditionScalarWhereInputSchema
