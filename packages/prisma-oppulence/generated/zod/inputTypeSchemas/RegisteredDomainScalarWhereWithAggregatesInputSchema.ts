import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'

export const RegisteredDomainScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RegisteredDomainScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => RegisteredDomainScalarWhereWithAggregatesInputSchema),
                z.lazy(() => RegisteredDomainScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => RegisteredDomainScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => RegisteredDomainScalarWhereWithAggregatesInputSchema),
                z.lazy(() => RegisteredDomainScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        domainId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default RegisteredDomainScalarWhereWithAggregatesInputSchema
