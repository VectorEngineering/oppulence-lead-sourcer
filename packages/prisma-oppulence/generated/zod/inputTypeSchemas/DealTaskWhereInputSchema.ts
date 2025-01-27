import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { EnumDealTaskPriorityNullableFilterSchema } from './EnumDealTaskPriorityNullableFilterSchema'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'
import { EnumDealTaskStatusFilterSchema } from './EnumDealTaskStatusFilterSchema'
import { DealTaskStatusSchema } from './DealTaskStatusSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DealRelationFilterSchema } from './DealRelationFilterSchema'
import { DealWhereInputSchema } from './DealWhereInputSchema'
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const DealTaskWhereInputSchema: z.ZodType<Prisma.DealTaskWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DealTaskWhereInputSchema), z.lazy(() => DealTaskWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DealTaskWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DealTaskWhereInputSchema), z.lazy(() => DealTaskWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        dueDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        priority: z
            .union([z.lazy(() => EnumDealTaskPriorityNullableFilterSchema), z.lazy(() => DealTaskPrioritySchema)])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumDealTaskStatusFilterSchema), z.lazy(() => DealTaskStatusSchema)]).optional(),
        completedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        assignedToId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        deal: z.union([z.lazy(() => DealRelationFilterSchema), z.lazy(() => DealWhereInputSchema)]).optional(),
        assignedTo: z
            .union([z.lazy(() => UserNullableRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default DealTaskWhereInputSchema
