import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const WorkspaceScalarWhereInputSchema: z.ZodType<Prisma.WorkspaceScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => WorkspaceScalarWhereInputSchema), z.lazy(() => WorkspaceScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => WorkspaceScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => WorkspaceScalarWhereInputSchema), z.lazy(() => WorkspaceScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ownerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default WorkspaceScalarWhereInputSchema
