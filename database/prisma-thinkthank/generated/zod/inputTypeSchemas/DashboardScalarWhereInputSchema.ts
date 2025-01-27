import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DashboardScalarWhereInputSchema: z.ZodType<Prisma.DashboardScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DashboardScalarWhereInputSchema), z.lazy(() => DashboardScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DashboardScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DashboardScalarWhereInputSchema), z.lazy(() => DashboardScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        linkId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        doIndex: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        showConversions: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default DashboardScalarWhereInputSchema
