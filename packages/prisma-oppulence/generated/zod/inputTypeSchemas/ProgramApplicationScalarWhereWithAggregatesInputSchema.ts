import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const ProgramApplicationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProgramApplicationScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProgramApplicationScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProgramApplicationScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ProgramApplicationScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProgramApplicationScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProgramApplicationScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        partnerId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        proposal: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        website: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        comments: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ProgramApplicationScalarWhereWithAggregatesInputSchema
