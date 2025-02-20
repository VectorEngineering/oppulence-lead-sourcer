import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LinkTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LinkTagScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LinkTagScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LinkTagScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LinkTagScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LinkTagScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LinkTagScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        linkId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        tagId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict()

export default LinkTagScalarWhereWithAggregatesInputSchema
