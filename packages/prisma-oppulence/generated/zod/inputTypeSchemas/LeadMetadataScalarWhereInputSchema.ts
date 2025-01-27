import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadMetadataScalarWhereInputSchema: z.ZodType<Prisma.LeadMetadataScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadMetadataScalarWhereInputSchema), z.lazy(() => LeadMetadataScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadMetadataScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadMetadataScalarWhereInputSchema), z.lazy(() => LeadMetadataScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        key: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        category: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isSearchable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadMetadataScalarWhereInputSchema
