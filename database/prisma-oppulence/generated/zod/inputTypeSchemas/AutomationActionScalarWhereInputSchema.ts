import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const AutomationActionScalarWhereInputSchema: z.ZodType<Prisma.AutomationActionScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => AutomationActionScalarWhereInputSchema), z.lazy(() => AutomationActionScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => AutomationActionScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => AutomationActionScalarWhereInputSchema), z.lazy(() => AutomationActionScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        automationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        template: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default AutomationActionScalarWhereInputSchema
