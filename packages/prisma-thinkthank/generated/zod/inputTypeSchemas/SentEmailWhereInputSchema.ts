import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const SentEmailWhereInputSchema: z.ZodType<Prisma.SentEmailWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => SentEmailWhereInputSchema), z.lazy(() => SentEmailWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => SentEmailWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => SentEmailWhereInputSchema), z.lazy(() => SentEmailWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        project: z
            .union([z.lazy(() => ProjectNullableRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default SentEmailWhereInputSchema
