import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadMetadataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadMetadataScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadMetadataScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadMetadataScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadMetadataScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadMetadataScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadMetadataScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        key: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        category: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        isSearchable: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadMetadataScalarWhereWithAggregatesInputSchema
