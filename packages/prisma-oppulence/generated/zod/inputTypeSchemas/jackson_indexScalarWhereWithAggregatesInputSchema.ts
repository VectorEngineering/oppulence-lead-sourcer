import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const jackson_indexScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.jackson_indexScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => jackson_indexScalarWhereWithAggregatesInputSchema),
                z.lazy(() => jackson_indexScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => jackson_indexScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => jackson_indexScalarWhereWithAggregatesInputSchema),
                z.lazy(() => jackson_indexScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        key: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        storeKey: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict()

export default jackson_indexScalarWhereWithAggregatesInputSchema
